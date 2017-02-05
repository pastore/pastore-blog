using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Web;
using Pastore.Model.Models;

namespace Pastore.Utility
{
    public class PastoreIdentity : IIdentity
    {
        private string userName;

        public PastoreIdentity(string UserName)
        {
            userName = UserName;
        }

        public string AuthenticationType => "Forms";

        public bool IsAuthenticated => !string.IsNullOrEmpty(userName);

        public string Name => userName;
    }
    public class PastorePrincipal : IPrincipal
    {
        private readonly ApplicationUser _user;
        private readonly PastoreIdentity _identity;
        private readonly List<string> _roles;
        public PastorePrincipal(ApplicationUser user, PastoreIdentity identity,List<string> roles )
        {
            _user = user;
            _identity = identity;
            _roles = roles;
        }

        public IIdentity Identity => _identity;

        public bool IsInRole(string role)
        {
            return _roles.Contains(role);
        }

        public ApplicationUser User => _user;
    }
}