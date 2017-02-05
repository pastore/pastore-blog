using Pastore.Data.DataContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pastore.Data.Infrastructure
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly IDatabaseFactory _databaseFactory;
        private DataBaseContext _dataContext;

        public UnitOfWork(IDatabaseFactory databaseFactory)
        {
            this._databaseFactory = databaseFactory;
        }

        protected DataBaseContext DataContext => _dataContext ?? (_dataContext = _databaseFactory.Get());

        public void Commit()
        {
            DataContext.Commit();
        }
         
        public async Task CommitAsync()
        {
            await  DataContext.SaveChangesAsync();
        }
    }
}
