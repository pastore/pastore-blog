using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.Ajax.Utilities;

namespace Pastore.Controllers
{
    public class SiteHeaderController : Controller
    {
        // GET: SiteHeader
        public ActionResult HomeHeader(ViewDataDictionary viewData)
        {
            viewData.ForEach(x => { ViewData[x.Key] = x.Value; });
            return PartialView();
        }
    }
}