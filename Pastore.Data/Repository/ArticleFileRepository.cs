using Pastore.Data.Infrastructure;
using Pastore.Model.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pastore.Data.Repository
{
    public class ArticleFileRepository : RepositoryBase<ArticleFile>, IArticleFileRepository
    {
        public ArticleFileRepository(IDatabaseFactory databaseFactory)
            : base(databaseFactory)
        {
        }
    }
    public interface IArticleFileRepository : IRepository<ArticleFile>
    {
    }
}
