using Pastore.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Pastore.Model.Models;
using Pastore.Data.Repository;
using Pastore.Data.Infrastructure;

namespace Pastore.Service.Services
{
    public class ArticleService : IArticleService
    {
        private  readonly IArticleRepository _articleRepository;
        private ICategoryRepository _categoryRepository;
        private readonly IUnitOfWork _unitOfWork;
        public ArticleService(IArticleRepository articleRepository, IUnitOfWork unitOfWork,
            ICategoryRepository categoryRepository)
        {
            _articleRepository = articleRepository;
            _unitOfWork = unitOfWork;
            _categoryRepository = categoryRepository;
        }
        public void CreateArticle(Article article)
        {
            _articleRepository.Add(article);
            SaveArticle();
        }

        public Article GetArticle(int id)
        {
            var article = _articleRepository.GetById(id);
            return article;
        }

        public IEnumerable<Article> GetArticles()
        {
            var articles = _articleRepository.GetAll();
            return articles;
        }
            
        public IEnumerable<Article> GetArticlesByCategory(string category)
        {
            var dbCategory = _categoryRepository.Get(x => x.Name == category);
            var categoriesId = new List<int>();
            categoriesId = GetCategoriesId(dbCategory, categoriesId);
            var articles = _articleRepository.GetMany(x => categoriesId.Contains(x.Id));
            return articles;
        }

        public void SaveArticle()
        {
            _unitOfWork.Commit();
        }
        public void DeleteArticle(int id)
        {
            var article = _articleRepository.GetById(id);
            _articleRepository.Delete(article);
            SaveArticle();
        }
        public void UpdateArticle(Article article)
        {
            _articleRepository.Update(article);
            SaveArticle();
        }

        #region private members
        List<int> GetCategoriesId(Category category, List<int> categoriesId)
        {
            categoriesId.Add(category.Id);
            foreach (var child in category.ChildrenCategories)
            {
                categoriesId = GetCategoriesId(child, categoriesId);
            }
            return categoriesId;
        }
        #endregion
    }
}
