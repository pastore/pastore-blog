using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Pastore.Controllers
{
    public class SiteFooterController : Controller
    {
        // GET: SiteFooter
        public ActionResult Index()
        {
            return PartialView();
        }
    }
}