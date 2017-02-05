using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Pastore
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Error_404",
                url: "error/404",
                defaults: new { controller = "Errors", action = "Error404", term = UrlParameter.Optional }
            );
            routes.MapRoute(
                name: "Search",
                url: "search/{term}",
                defaults: new { controller = "Search", action = "Search", term = UrlParameter.Optional }
            );
            routes.MapRoute(
                name: "Home_ArticleView",
                url: "article/{articleId}",
                defaults: new { controller = "Home", action = "ArticleView", articleId = UrlParameter.Optional }
            );
            routes.MapRoute(
                name: "Articles_ByCategories",
                url: "{category}",
                defaults: new { controller = "Home", action = "Index", category = UrlParameter.Optional }
            );
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
