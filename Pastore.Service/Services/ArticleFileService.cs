using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Pastore.Model.Models;
using Pastore.Service.Interfaces;
using Pastore.Data.Infrastructure;
using Pastore.Data.Repository;

namespace Pastore.Service.Services
{
    public class ArticleFileService: IArticleFileService
    {
        readonly IArticleFileRepository _articleFileRepository;
        readonly IUnitOfWork _unitOfWork;
        public ArticleFileService(IArticleFileRepository articleFileRepository, IUnitOfWork unitOfWork)
        {
            _articleFileRepository = articleFileRepository;
            _unitOfWork = unitOfWork;
        }
        public ArticleFile GetArticleFile(int id)
        {
            var articleFile = _articleFileRepository.GetById(id);
            return articleFile;
        }

        public IEnumerable<ArticleFile> GetArticleFiles()
        {
            return _articleFileRepository.GetAll();
        }
        public IEnumerable<ArticleFile> GetArticleFiles(int articleId)
        {
            return _articleFileRepository.GetMany(x => x.ArticleId == articleId);
        }
        public IEnumerable<ArticleFile> GetArticleFiles(int articleId, ArticleFileType articleFileTYpe)
        {
            return _articleFileRepository.GetMany(x => x.ArticleId == articleId && x.ArticleFileType == articleFileTYpe);
        }

        public void CreateArticleFile(ArticleFile articleFile)
        {
            _articleFileRepository.Add(articleFile);
            SaveArticle();
        }

        public void UpdateArticle(ArticleFile articleFile)
        {
            _articleFileRepository.Update(articleFile);
            SaveArticle();
        }

        public void DeleteArticleFile(int id)
        {
            var articleFile = _articleFileRepository.GetById(id);
            _articleFileRepository.Delete(articleFile);
            SaveArticle();
        }

        public void SaveArticle()
        {
            _unitOfWork.Commit();
        }
    }
}
