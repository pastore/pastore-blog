using System.Web.Mvc;

namespace Pastore.Areas.Admin
{
    public class AdminAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Admin";
            }
        }
        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Admin_Categories",
                "admin/categories",
                new { area = AreaName, controller = "Admin", action = "Categories" },
                null,
                new string[] { "Pastore.Areas.Admin.Controllers" }
            );
            context.MapRoute(
                "Admin_Edit_Category",
                "admin/editcategory/{id}",
                new { area = AreaName, controller = "Admin", action = "EditCategory" },
                null,
                new string[] { "Pastore.Areas.Admin.Controllers" }
            );
            context.MapRoute(
                "Admin_Delete_Category",
                "admin/deletecategory/{id}",
                new { area = AreaName, controller = "Admin", action = "DeleteCategory" },
                null,
                new string[] { "Pastore.Areas.Admin.Controllers" }
            );
            context.MapRoute(
                "Admin_Articles",
                "admin/articles",
                new { area = AreaName, controller = "Admin", action = "Articles" },
                null,
                new string[] { "Pastore.Areas.Admin.Controllers" }
            );
            context.MapRoute(
                "Admin_Edit_Article",
                "admin/editarticle/{id}",
                new { area = AreaName, controller = "Admin", action = "EditArticle" },
                null,
                new string[]{ "Pastore.Areas.Admin.Controllers" }
            );
            context.MapRoute(
                "Admin_Delete_Article",
                "admin/deletearticle/{id}",
                new { area = AreaName, controller = "Admin", action = "DeleteArticle" },
                null,
                new string[] { "Pastore.Areas.Admin.Controllers" }
            );
            context.MapRoute(
                "LoginAs",
                "admin/loginas",
                new { area = AreaName, controller = "Admin", action = "LoginAs" },
                null,
                new string[] { "Pastore.Areas.Admin.Controllers" }
            );
            context.MapRoute(
                "Admin_Users",
                "admin/users",
                new { area = AreaName, controller = "Admin", action = "Users" },
                null,
                new string[] { "Pastore.Areas.Admin.Controllers" }
            );
            context.MapRoute(
                "Admin_Dashboard",
                "admin/dashboard",
                new { area = AreaName, controller = "Admin", action = "Dashboard" },
                null,
                new [] { "Pastore.Areas.Admin.Controllers" }
            );
        }
    }
}