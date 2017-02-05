using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Pastore.Data.Infrastructure;
using Pastore.Data.Repository;
using Pastore.Model.Models;
using Pastore.Service.Interfaces;

namespace Pastore.Service.Services
{
    public class GlobalSearchService: IGlobalSearchService
    {
        private readonly IArticleRepository _articleRepository;
        private readonly ICategoryRepository _categoryRepository;
        public GlobalSearchService(IArticleRepository articleRepository,
            ICategoryRepository categoryRepository)
        {
            _articleRepository = articleRepository;
            _categoryRepository = categoryRepository;
        }

        public async Task<IEnumerable<Article>> SearchArticles(string term)
        {
            Debug.WriteLine("Article: " + Thread.CurrentThread.ManagedThreadId);
            var articles = await _articleRepository.GetManyAsync(
                    x =>
                        x.ArticleName.Contains(term) || x.ArticleContent.Contains(term) ||
                        x.ArticleDescription.Contains(term) || x.Categories.Any(c => c.Name.Contains(term)));
            return articles;
        }
        
        public async Task<IEnumerable<Category>> SearchCategories(string term)
        {
            Debug.WriteLine("Category: " + Thread.CurrentThread.ManagedThreadId);
            var categories = await _categoryRepository.GetManyAsync(x => x.Name.Contains(term));
            return categories;
        }
    }
}
