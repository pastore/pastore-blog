using Pastore.Data.DataContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pastore.Data.Infrastructure
{
    public interface IDatabaseFactory : IDisposable
    {
        DataBaseContext Get();
    }
}
