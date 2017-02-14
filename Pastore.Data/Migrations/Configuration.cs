using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Pastore.Data.Migrations
{
    using Model.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    public class Configuration : DbMigrationsConfiguration<Pastore.Data.DataContext.DataBaseContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
        }

        protected override void Seed(Pastore.Data.DataContext.DataBaseContext context)
        {
            var userStore = new UserStore<ApplicationUser>(context);
            var userManager = new UserManager<ApplicationUser>(userStore)
            {
                PasswordValidator = new PasswordValidator()
                {
                    RequiredLength = 4,
                    RequireNonLetterOrDigit = false,
                    RequireDigit = false,
                    RequireLowercase = false,
                    RequireUppercase = false
                }
            };

            var roleStore = new RoleStore<IdentityRole>(context);
            var roleManager = new RoleManager<IdentityRole>(roleStore);

            // Create role Admin
            if (!roleManager.RoleExists("Admin"))
            {
                roleManager.Create(new IdentityRole("Admin"));
            }

            //Create user
            if (context.Users.Any(u => u.Email == "pastore@mail.ru")) return;
            var userToInsert = new ApplicationUser
            {
                UserName = "pastore",
                Email = "pastore@mail.ru",
                EmailConfirmed = true,
                AccountType = AccountType.Admin,
                DateCreated = DateTime.Now,
                LastLoginTime = DateTime.Now
            };
            userManager.Create(userToInsert, "1111");
            if (!userManager.IsInRole(userToInsert.Id, "Admin"))
            {
                userManager.AddToRole(userToInsert.Id, "Admin");
            }
            var userProfile = new UserProfile {UserId = userToInsert.Id};
            context.UserProfiles.Add(userProfile);
        }
    }
}
