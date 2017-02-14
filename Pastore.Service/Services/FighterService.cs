using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Pastore.Data.Infrastructure;
using Pastore.Data.Repository;
using Pastore.Model.Models;
using Pastore.Service.Interfaces;

namespace Pastore.Service.Services
{
    public class FighterService: IFighterService
    {
        private readonly IFighterRepository _fighterRepository;
        readonly IUnitOfWork _unitOfWork;
        public FighterService(IFighterRepository fighterRepository, IUnitOfWork unitOfWork)
        {
            _fighterRepository = fighterRepository;
            _unitOfWork = unitOfWork;
        }
        public IEnumerable<Fighter> GetFighters()
        {
            return _fighterRepository.GetAll();
        }

        public void CreateFighter(Fighter fighter)
        {
            _fighterRepository.Add(fighter);
            _unitOfWork.Commit();
        }

        public void DeleteAllFighters()
        {
            _fighterRepository.Delete(x => x.Age <= 40);
            _unitOfWork.Commit();
        }
    }
}
