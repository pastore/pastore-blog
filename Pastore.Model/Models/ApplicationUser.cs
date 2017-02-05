using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Pastore.Model.Models
{
    public class ApplicationUser: IdentityUser
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // Add custom user claims here
            return userIdentity;
        }
        public AccountType AccountType { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime? LastLoginTime { get; set; }
        public virtual ICollection<Article> Articles { get; set; }
    }

    public enum AccountType
    {
        Anonymous = 0,
        User = 1,
        Admin = 2
    }
}
