using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Pastore.Model.Models;

namespace Pastore.Service.ViewModel
{
    public class GlobalSearchResultModel
    {
        public GlobalSearchResultModel()
        {
            Articles = Enumerable.Empty<Article>();
            Categories = Enumerable.Empty<Category>();
        }
        public IEnumerable<Article> Articles { get; set; }
        public IEnumerable<Category> Categories { get; set; }
    }
}
