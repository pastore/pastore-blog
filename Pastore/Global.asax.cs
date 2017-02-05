using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Pastore.Data.DataContext;
using Pastore.Service.Interfaces;
using Pastore.Utility;

namespace Pastore
{
    public class MvcApplication : System.Web.HttpApplication
    {
        private IApplicationUserService _applicationUserService;
        private ApplicationUserManager _userManager;
        protected void Application_Start()
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<DataBaseContext, Pastore.Data.Migrations.Configuration>());

            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes); 
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            BundleTable.EnableOptimizations = false;
            Bootstrapper.Run();
        }
        protected void Application_AuthenticateRequest()
        {
            if (Context?.User == null || !Context.User.Identity.IsAuthenticated) return;
            _applicationUserService = DependencyResolver.Current.GetService<IApplicationUserService>();
            _userManager = HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>(); 
             var user = Context.Cache.GetOrStore("User" + Context.User.Identity.Name,
                () => _applicationUserService.GetUser(Context.User.Identity.GetUserId()));
            PastoreIdentity userIdentity = new PastoreIdentity(User.Identity.Name);
            var roles = user != null && _userManager != null ?
                _userManager.GetRoles(user.Id).ToList() : new List<string>();
            
            var pastorePrincipal = new PastorePrincipal(user, userIdentity, roles);
            Context.User = pastorePrincipal;
        }
    }
}
