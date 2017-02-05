using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pastore.Model.Models
{
    public class UserProfile
    {
        public UserProfile()
        {
            DateUpdated = DateTime.Now;
        }
        [Key]
        public int Id { get; set; }

        public DateTime DateUpdated{ get; set; }

        public DateTime? DateOfBirth { get; set; }

        public bool Gender { get; set; } = true;

        public string Address { get; set; }

        public string City { get; set; }
        public int? CityId { get; set; }

        public string Country { get; set; }
        public int? CountryId { get; set; }

        public double? Phone { get; set; }

        public string UserId { get; set; }
    }
}
