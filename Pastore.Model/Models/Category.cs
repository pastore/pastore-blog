﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pastore.Model.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int SortOrder { get; set; }
        public int? ParentId { get; set; }
        public virtual Category Parent {get; set; }
        public virtual ICollection<Category>  ChildrenCategories { get; set; }
        public virtual ICollection<Article> Articles { get; set; }
    }
}
