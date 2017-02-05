using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Pastore.Areas.JavaScript.Controllers
{
    public class JSController : Controller
    {
        // GET: JavaScript/JS
        public ActionResult ColorPicker()
        {
            return View("ColorPicker");
        }
        [HttpPost]
        public ActionResult CheckColorPicker(string colorName)
        {
            return Content("<div style=\"height:30px;width:80px;background-color:" + colorName + "\"></div>");
        }
    }
}