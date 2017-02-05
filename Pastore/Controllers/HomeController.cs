using AutoMapper;
using Pastore.Model.Models;
using Pastore.Service.Interfaces;
using Pastore.Utility;
using Pastore.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.Ajax.Utilities;
using System.Web.Routing;
using System.Web.UI.WebControls;

namespace Pastore.Controllers
{
    public class HomeController : PastoreControllerBase
    {
        private readonly IArticleService _articleService;
        private readonly ICategoryServise _categoryServise;
        public HomeController(IArticleService articleService, ICategoryServise categoryServise)
        {
            this._articleService = articleService;
            this._categoryServise = categoryServise;
        }
        public ActionResult Index(string category, int page = 1)
        {
            var countPerPage = 5;
            var dbarticles = Enumerable.Empty<Article>();

            if (string.IsNullOrWhiteSpace(category))
            {
                dbarticles = _articleService.GetArticles();
            }
            else
            {
                //create links for breadcrumbs
                var parentCategoryLinks = _categoryServise
                    .GetParentCategoryNames(category)
                    .Select(x => new IdNamePath
                    {
                        Name = x,
                        Path = Url.RouteUrl("Articles_ByCategories", new { category = x })
                    });
                var subHeaderLinks = new List<IdNamePath>();
                subHeaderLinks.Add(new IdNamePath() { Name = "Home", Path = Url.RouteUrl("Default") });
                subHeaderLinks.AddRange(parentCategoryLinks);
                subHeaderLinks.Add(new IdNamePath() { Name = category, Path = Url.RouteUrl("Articles_ByCategories", new { category = category })});
                ViewBag.subHeaderLinks = subHeaderLinks;
                ViewBag.showSubHeader = true;
                //filter articles by category
                dbarticles = _articleService.GetArticlesByCategory(category); 
            }
            var countPages = dbarticles.Any() ? Math.Ceiling((double) (dbarticles.Count()/countPerPage)) : 1;
            //filter articles by page
            dbarticles = dbarticles.Skip(countPerPage * (page - 1)).Take(countPerPage); 
            //data for pager
            ViewBag.countPages = countPages;
            ViewBag.currentPage = page;
            ViewBag.countVisiblePagerButtons = 3;
            ViewBag.nameRoute = "Default";
            ViewBag.routeValues = new RouteValueDictionary()
            {
                { "category" , category}
            };

            var articles = Mapper.Map<IEnumerable<Article>, IEnumerable<ArticleHomeViewModel>>(dbarticles);
            return View("Index",articles);
        }

        public ActionResult ArticleView(int articleId)
        {
            return View("ArticleView");
        }
        public ActionResult HomeSidePanel()
        {
            int count = 0;
            var categories = _categoryServise.GetCategories();
            ViewBag.categories = categories.Select(x => new IdNameGroup
            {
                Id = x.Id,
                Name = x.Name,
                GroupId = GetCountArticlesForCategory(x,count)
            });
            return PartialView("pv_HomeSidePanel");
        }
        #region private members
        int GetCountArticlesForCategory(Category categoryViewModel, int count)
        {
            count += categoryViewModel.Articles.Count();
            if (categoryViewModel.ChildrenCategories.Any())
            {
                foreach (var child in categoryViewModel.ChildrenCategories)
                {
                    count = GetCountArticlesForCategory(child, count);
                }
            }
            return count;
        }
        #endregion
    }
}