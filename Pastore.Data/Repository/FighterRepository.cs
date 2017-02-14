using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Pastore.Data.Infrastructure;
using Pastore.Model.Models;

namespace Pastore.Data.Repository
{
    public class FighterRepository: RepositoryBase<Fighter>, IFighterRepository
    {
        public FighterRepository(IDatabaseFactory databaseFactory)
            : base(databaseFactory)
        {}
    }
    public interface IFighterRepository : IRepository<Fighter>
    {
    }
}
