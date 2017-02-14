using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pastore.Model.Models
{
    public class Fighter
    {
        public  int Id { get; set; }
        public string Name { get; set; }
        public int? Age { get; set; }
        public OrganizationType OrganizationType { get; set; }
    }

    public enum OrganizationType
    {
        Ufc = 1,
        Bellator = 2,
        M1 = 3,
        Acb = 4,
        One = 5
    }
}
