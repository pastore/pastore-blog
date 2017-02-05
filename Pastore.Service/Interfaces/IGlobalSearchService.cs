using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Pastore.Model.Models;

namespace Pastore.Service.Interfaces
{
    public interface IGlobalSearchService
    {
        Task<IEnumerable<Article>> SearchArticles(string term);
        Task<IEnumerable<Category>> SearchCategories(string term);
    }
}
