using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Pastore.Service.Interfaces;
using Pastore.Service.ViewModel;

namespace Pastore.Controllers
{
    public class SearchController : Controller
    {
        private readonly IGlobalSearchService _globalSearchService;
        public SearchController(IGlobalSearchService globalSearchService)
        {
            _globalSearchService = globalSearchService;
        }
        [ValidateInput(false)]
        public async Task<ActionResult> Search(string term)
        {
            GlobalSearchResultModel searchModel = new GlobalSearchResultModel();
            searchModel.Articles = await _globalSearchService.SearchArticles(term);
            searchModel.Categories = await _globalSearchService.SearchCategories(term);
            ViewBag.term = term;
            return View("Search", searchModel);
        }
    }
}