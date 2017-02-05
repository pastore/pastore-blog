using Pastore.Model.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Ajax.Utilities;
using Pastore.Service.Interfaces;
using Pastore.Utility;

namespace Pastore.Services
{
    public interface ICurrentUserServise
    {
        ApplicationUser CurrentUser();
    }
    public class CurrentUserService: ICurrentUserServise
    {
        public ApplicationUser CurrentUser()
        {
            if (HttpContext.Current?.User != null && HttpContext.Current.User.Identity.IsAuthenticated)
            {
                var user = HttpContext.Current.User as PastorePrincipal;
                if (user?.User != null)
                {
                    return user.User;
                }
            }
            return new ApplicationUser
            {
                Id = String.Empty,
                AccountType = AccountType.Anonymous
            };
        }
    }
}