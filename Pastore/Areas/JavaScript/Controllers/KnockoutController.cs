using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Pastore.Model.Models;
using Pastore.Service.Interfaces;
using Pastore.Service.Services;

namespace Pastore.Areas.JavaScript.Controllers
{
    public class KnockoutController : Controller
    {
        private readonly IFighterService _fighterService;

        public KnockoutController(IFighterService fighterService)
        {
            _fighterService = fighterService;
        }
        // GET: JavaScript/Knockout
        public ActionResult Pager()
        {
            return View();
        }
        
        public ActionResult Test()
        {
            _fighterService.DeleteAllFighters();
            var fighters = _fighterService.GetFighters();
            if (fighters.Any()) return View(fighters);
            {
                const string letters = "abcdefghijklmnopqrstuvwxyz";
                var random = new Random();
                for (var i = 0; i < 1000; i++)
                {
                    var name = string.Join("", letters.ToList().OrderBy(l => Guid.NewGuid()).Take(random.Next(4, 8)));
                    var type = random.Next(1, 5);
                    var age = random.Next(18, 40);
                    var fighter = new Fighter()
                    {
                        Name = name,
                        OrganizationType = (OrganizationType)type,
                        Age = age
                    };
                    _fighterService.CreateFighter(fighter);
                }
            }
            fighters = _fighterService.GetFighters();
            return View(fighters);
        }
    }
}