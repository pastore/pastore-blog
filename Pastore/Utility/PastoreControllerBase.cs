using Pastore.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Pastore.Model.Models;
using Pastore.Service.Interfaces;

namespace Pastore.Utility
{
    public class PastoreControllerBase : Controller
    {
        private readonly Lazy<ICurrentUserServise> _currentUserServise;

        public PastoreControllerBase()
        {
            _currentUserServise = new Lazy<ICurrentUserServise>(() => DependencyResolver.Current.GetService<ICurrentUserServise>()); 
        }

        protected ApplicationUser CurrentUser => _currentUserServise.Value.CurrentUser();

        // inject currentUser instance to ViewBag/ViewData
        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            filterContext.Controller.ViewBag.currentUser = CurrentUser;

            base.OnActionExecuting(filterContext);
        }
    }
}