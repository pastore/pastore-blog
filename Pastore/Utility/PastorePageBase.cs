using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Web;
using System.Web.Mvc;
using Pastore.Model.Models;
using Pastore.Services;

namespace Pastore.Utility
{
    public class PastorePageBase : WebViewPage
    {
        private readonly Lazy<ICurrentUserServise> _currentUserServise = null;
        public PastorePageBase()
        {
            _currentUserServise = new Lazy<ICurrentUserServise>(() => DependencyResolver.Current.GetService<ICurrentUserServise>());
        }
        public override void Execute()
        {
           
        }
        protected ApplicationUser CurrentUser => _currentUserServise.Value.CurrentUser();
    }

    public class PastorePageBase<T> : WebViewPage<T>
    {
        private readonly Lazy<ICurrentUserServise> _currentUserServise = null;
        public PastorePageBase()
        {
            _currentUserServise = new Lazy<ICurrentUserServise>(() => DependencyResolver.Current.GetService<ICurrentUserServise>());
        }
        public override void Execute()
        {

        }
        protected ApplicationUser CurrentUser => _currentUserServise.Value.CurrentUser();
    }
}