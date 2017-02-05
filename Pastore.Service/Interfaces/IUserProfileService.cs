using Pastore.Model.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pastore.Service.Interfaces
{
    public interface IUserProfileService
    {
        UserProfile GetProfile(int id);
        UserProfile GetUser(string userid);
        void CreateUserProfile(string userId);
        void UpdateUserProfile(UserProfile user);
        void SaveUserProfile();
    }
}
