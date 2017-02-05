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
    public class ApplicationUserService : IApplicationUserService
    {
        private readonly IApplicationUserRepository applicationUserRepository;
        private readonly IUserProfileRepository userProfileRepository;
        private readonly IUnitOfWork unitOfWork;

        public ApplicationUserService(IApplicationUserRepository ApplicationUserRepository, IUserProfileRepository UserProfileRepository, IUnitOfWork UnitOfWork)
        {
            this.applicationUserRepository = ApplicationUserRepository;
            this.userProfileRepository = UserProfileRepository;
            this.unitOfWork = UnitOfWork;
        }

        public ApplicationUser GetUser(string userId)
        {
            var user = applicationUserRepository.GetById(userId);
            return user;
        }
        public ApplicationUser GetUserByName(string userName)
        {
            var user = applicationUserRepository.Get(x => x.UserName == userName);
            return user;
        }
        public IEnumerable<ApplicationUser> GetUsers()
        {
            var users = applicationUserRepository.GetAll();
            return users;
        }

        public void SaveApplicationUser()
        {
            unitOfWork.Commit();
        }
        public void UpdateUser(ApplicationUser user)
        {
            applicationUserRepository.Update(user);
            SaveApplicationUser();
        }
    }
}
