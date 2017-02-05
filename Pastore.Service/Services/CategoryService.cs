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
    class CategoryService : ICategoryServise
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IUnitOfWork _unitOfWork;
        public CategoryService(ICategoryRepository categoryRepository, IUnitOfWork unitOfWork)
        {
            _categoryRepository = categoryRepository;
            _unitOfWork = unitOfWork;
        }
        public void CreateCategory(Category category)
        {
            _categoryRepository.Add(category);
            SaveCategory();
        }

        public IEnumerable<Category> GetCategories()
        {
            var categories = _categoryRepository.GetAll();
            return categories;
        }
        public IEnumerable<Category> GetCategories(int [] categoriesId)
        {
            var categories = _categoryRepository.GetMany(x => categoriesId.Contains(x.Id));
            return categories;
        }
        public IEnumerable<string> GetParentCategoryNames(string categoryName)
        {
            var category = _categoryRepository.Get(x => x.Name == categoryName);
            var parentNames = new List<string>();
            parentNames = GetParentName(category, parentNames);
            parentNames.Reverse();
            return parentNames;
        }
        public Category GetCategory(int id)
        {
            var category = _categoryRepository.GetById(id);
            return category;
        }

        public void SaveCategory()
        {
            _unitOfWork.Commit();
        }
        public void DeleteCategory(int id)
        {
            var category = _categoryRepository.GetById(id);
            _categoryRepository.Delete(category);
            SaveCategory();
        }
        public void UpdateCategory(Category category)
        {
            _categoryRepository.Update(category);
            SaveCategory();
        }

        #region private members
        List<string> GetParentName(Category category,List<string> parentNames)
        {
            if (category.ParentId.HasValue)
            {
                var tempCategory = _categoryRepository.GetById(category.ParentId.Value);
                parentNames.Add(tempCategory.Name);
                parentNames = GetParentName(tempCategory, parentNames);
            }
            return parentNames;
        }
        #endregion
    }
}
