using Pastore.Model.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pastore.Service.Interfaces
{
    public interface ICategoryServise
    {
        Category GetCategory(int id);
        IEnumerable<Category> GetCategories();
        IEnumerable<Category> GetCategories(int[] categoriesId);
        IEnumerable<string> GetParentCategoryNames(string categoryName);
        void CreateCategory(Category category);
        void UpdateCategory(Category category);
        void DeleteCategory(int id);
        void SaveCategory();
    }
}
