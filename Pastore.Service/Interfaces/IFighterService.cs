using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Pastore.Model.Models;

namespace Pastore.Service.Interfaces
{
    public interface IFighterService
    {
        IEnumerable<Fighter> GetFighters();
        void CreateFighter(Fighter fighter);
        void DeleteAllFighters();
    }
}
