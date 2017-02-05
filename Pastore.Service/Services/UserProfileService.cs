using Pastore.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Pastore.Model.Models;
using Pastore.Data.Infrastructure;
using Pastore.Data.Repository;

namespace Pastore.Service.Services
{
    public class UserProfileService : IUserProfileService
    {
        private readonly IUserProfileRepository userProfileRepository;
        private readonly IUnitOfWork unitOfWork;
        public UserProfileService(IUserProfileRepository UserProfileRepository, IUnitOfWork UnitOfWork)
        {
            this.userProfileRepository = UserProfileRepository;
            this.unitOfWork = UnitOfWork;
        }
        public void CreateUserProfile(string userId)
        {
            UserProfile userProfile = new UserProfile();
            userProfile.UserId = userId;
            userProfileRepository.Add(userProfile);
            SaveUserProfile();
        }
        public UserProfile GetProfile(int id)
        {
            var user = userProfileRepository.GetById(id);
            return user;
        }
        public UserProfile GetUser(string id)
        {
            var user = userProfileRepository.Get(x => x.UserId == id);
            return user;
        }
        public void SaveUserProfile()
        {
            unitOfWork.Commit();
        }

        public void UpdateUserProfile(UserProfile user)
        {
            userProfileRepository.Update(user);
            SaveUserProfile();
        }
    }
}
