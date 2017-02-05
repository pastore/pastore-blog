using Pastore.Model.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pastore.Service.Interfaces
{
    public interface IApplicationUserService
    {
        ApplicationUser GetUser(string userId);
        ApplicationUser GetUserByName(string userName);
        IEnumerable<ApplicationUser> GetUsers();
        void UpdateUser(ApplicationUser user);
        void SaveApplicationUser();
    }
}
