using Pastore.Data.DataContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pastore.Data.Infrastructure
{
    public class DatabaseFactory : Disposable, IDatabaseFactory
    {
        private DataBaseContext dataContext;
        public DataBaseContext Get()
        {
            return dataContext ?? (dataContext = new DataBaseContext());
        }
        protected override void DisposeCore()
        {
            dataContext?.Dispose();
        }
    }
}
