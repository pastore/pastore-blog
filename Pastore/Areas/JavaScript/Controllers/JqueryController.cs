using Pastore.Areas.JavaScript.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Pastore.Areas.JavaScript.Controllers
{
    public class JqueryController : Controller
    {
        // GET: JavaScript/Jquery
        public ActionResult FileUpload()
        {
            return View();
        }
        [HttpPost]
        public JsonResult FileUploadEdit()
        {
            var context = HttpContext;
            var files = new List<JsonFile>();
            foreach(String inputFile in context.Request.Files)
            {
                var file = context.Request.Files[inputFile];
                files.Add(new JsonFile() {
                     Name = file.FileName
                });
            }
            return Json(files.ToArray());
        }
    }
}