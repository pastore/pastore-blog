using Pastore.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Caching;
using System.Web.DynamicData;
using System.Web.Mvc;
using AutoMapper;
using Microsoft.AspNet.Identity;
using Pastore.Model.Models;
using Pastore.ViewModels;
using WebGrease.Css.Extensions;
using Pastore.Utility;
using Microsoft.AspNet.Identity.Owin;

namespace Pastore.Areas.Admin.Controllers
{
    [Authorize(Roles = "Admin")]
    public class AdminController : PastoreControllerBase
    {
        private readonly IArticleService _articleService = null;
        private readonly IArticleFileService _articleFileService = null;
        private readonly ICategoryServise _categoryServise = null;
        private readonly IApplicationUserService _userService = null;
        public AdminController(IArticleService articleService, IApplicationUserService userService,
            ICategoryServise categoryServise, IArticleFileService articleFileService)
        {
            this._articleService = articleService;
            this._userService = userService;
            this._categoryServise = categoryServise;
            this._articleFileService = articleFileService;
        }
        public ActionResult Dashboard()
        {
            return View("Dashboard");
        }

        #region articles
        public ActionResult Articles()
        {
            var model = Mapper.Map<IEnumerable<Article>, IEnumerable<ArticleViewModel>>(_articleService.GetArticles());

            return View("Articles", model);
        }
        public ActionResult EditArticle(int id)
        {
            var article = new ArticleViewModel();
            if (id != 0)
            {
                article = Mapper.Map<Article, ArticleViewModel>(_articleService.GetArticle(id));
            }
            var categories = _categoryServise.GetCategories().Select(x => new { CategoryId = x.Id, CategoryName = x.Name}).ToList();
            article.Categories = new MultiSelectList(categories.OrderBy(x => x.CategoryId), "CategoryId", "CategoryName");
            if(article.ArticleFiles == null)
            {
                article.ArticleFiles = _articleFileService.GetArticleFiles(article.Id);
            }
            return View("EditArticle", article);
        }
        [HttpPost]
        public ActionResult EditArticle(ArticleViewModel articleViewModel, HttpPostedFileBase teaserImage)
        {
            if (!ModelState.IsValid)
                return View("EditArticle", articleViewModel);
            var articleFile = new ArticleFile();
            if (teaserImage != null && teaserImage.ContentLength > 0)
            {
                articleFile.FileName = Guid.NewGuid().ToString().Substring(0, 6) + teaserImage.FileName;
                articleFile.ArticleFileType = ArticleFileType.TeaserImage;
            }
            var article = _articleService.GetArticle(articleViewModel.Id);
            var categories = _categoryServise.GetCategories(articleViewModel.CategoryId);
            if (article == null)
            {
                article = new Article
                {
                    ArticleName = articleViewModel.ArticleName,
                    ArticleDescription = articleViewModel.ArticleDescription,
                    ArticleContent = articleViewModel.ArticleContent,
                    UrlViewDemo = articleViewModel.UrlViewDemo,
                    UserId = CurrentUser.Id,
                    DateUpdated = DateTime.Now,
                    Categories = categories.ToList()
                };
                if (!string.IsNullOrWhiteSpace(articleFile.FileName))
                {
                    article.ArticleFiles.Add(articleFile);
                }
                _articleService.CreateArticle(article);
            }
            else
            {
                var deleteCategories = article.Categories.Except(categories);
                var addCategories = categories.Except(article.Categories);
                deleteCategories.ForEach(x => article.Categories.Remove(x));
                foreach (var category in addCategories)
                {
                    article.Categories.Add(category);
                }
                article.ArticleName = articleViewModel.ArticleName;
                article.ArticleContent = articleViewModel.ArticleContent;
                article.UrlViewDemo = articleViewModel.UrlViewDemo;
                article.UserId = CurrentUser.Id;
                article.DateUpdated = DateTime.Now;
                if (!string.IsNullOrWhiteSpace(articleFile.FileName))
                {
                    article.ArticleFiles.Add(articleFile);
                }
                _articleService.UpdateArticle(article);
            }
            if (!string.IsNullOrWhiteSpace(articleFile.FileName))
            {
                teaserImage?.SaveAs(Path.Combine(Server.MapPath("~/images"),articleFile.FileName));
            }
            return RedirectToAction("Articles");
        }
        public ActionResult DeleteArticle(int id)
        {
            var article = _articleService.GetArticle(id);
            if (article == null)
            {
                return HttpNotFound();
            }
            _articleService.DeleteArticle(id);
            ViewBag.isPartial = true;
            var articles = Mapper.Map<IEnumerable<Article>, IEnumerable<ArticleViewModel>>(_articleService.GetArticles());
            return View("Articles", articles);
        }
        #endregion

        #region categories
        public ActionResult Categories()
        {
            var model = Mapper.Map<IEnumerable<Category>, IEnumerable<CategoryViewModel>>(_categoryServise.GetCategories());
            return View("Categories", model);
        }
        public ActionResult EditCategory(int id)
        {
            var category = new CategoryViewModel(); 
            if (id != 0)
            {
                category = Mapper.Map<Category, CategoryViewModel>(_categoryServise.GetCategory(id));
            }
            var categories = Mapper.Map<IEnumerable<Category>, IEnumerable<CategoryViewModel>>(_categoryServise.GetCategories());
            ViewBag.categories = categories; 
            return View("EditCategory", category);
        }
        [HttpPost]
        public ActionResult EditCategory(CategoryViewModel categoryViewModel)
        {
            if (ModelState.IsValid)
            {
                var category = Mapper.Map<CategoryViewModel, Category>(categoryViewModel);
                if (category.Id == 0)
                {
                    _categoryServise.CreateCategory(category);
                }
                else
                {
                    _categoryServise.UpdateCategory(category);
                }
                if (categoryViewModel.ParentId != null)
                {
                    var parentCategory = _categoryServise.GetCategory(categoryViewModel.ParentId.GetValueOrDefault(0));
                    parentCategory.ChildrenCategories.Add(category);
                    _categoryServise.UpdateCategory(parentCategory);
                }
                return RedirectToAction("Categories");
            }
            return View("EditCategory", categoryViewModel);
        }
        public ActionResult DeleteCategory(int id)
        {
            var category = _categoryServise.GetCategory(id);
            if (category == null)
            {
                return HttpNotFound();
            }
            _categoryServise.DeleteCategory(id);
            ViewBag.isPartial = true;
            var categories = Mapper.Map<IEnumerable<Category>, IEnumerable<CategoryViewModel>>(_categoryServise.GetCategories());
            return View("Categories", categories);
        }
        #endregion

        #region users
        public ActionResult Users()
        {
            var model = _userService.GetUsers();

            return View("Users", model);
        }

        public ActionResult LoginAs(string id)
        {
            var user = _userService.GetUser(id);
            var signInManager = HttpContext.GetOwinContext().Get<ApplicationSignInManager>();
            signInManager.AuthenticationManager.SignOut(DefaultAuthenticationTypes.ApplicationCookie);
            signInManager.SignIn(user,false,false);
            return Redirect("~/");
        }
        #endregion
    }
}