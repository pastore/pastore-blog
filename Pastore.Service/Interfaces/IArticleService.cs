using Pastore.Model.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pastore.Service.Interfaces
{
    public interface IArticleService
    {
        Article GetArticle(int id);
        IEnumerable<Article> GetArticles();
        IEnumerable<Article> GetArticlesByCategory(string category);
        void CreateArticle(Article article);
        void UpdateArticle(Article article);
        void DeleteArticle(int id);
        void SaveArticle();
    }
}
