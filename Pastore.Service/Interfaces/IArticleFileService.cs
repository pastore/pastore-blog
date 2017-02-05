using Pastore.Model.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pastore.Service.Interfaces
{
    public interface IArticleFileService
    {
        ArticleFile GetArticleFile(int id);
        IEnumerable<ArticleFile> GetArticleFiles();
        IEnumerable<ArticleFile> GetArticleFiles(int articleId);
        IEnumerable<ArticleFile> GetArticleFiles(int article,ArticleFileType articleFileTYpe);
        void CreateArticleFile(ArticleFile articleFile);
        void UpdateArticle(ArticleFile articleFile);
        void DeleteArticleFile(int id);
        void SaveArticle();
    }
}
