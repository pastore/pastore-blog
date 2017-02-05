using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pastore.ViewModels
{
    public class IdNameEntry<T_ID, T_Name>
    {
        public virtual T_ID Id { get; set; }
        public virtual T_Name Name { get; set; }
    }
    public class IdName : IdNameEntry<int, string>
    {
        public override int GetHashCode()
        {
            return Id;
        }
        public override bool Equals(object obj)
        {
            if (!(obj is IdName))
            {
                return base.Equals(obj);
            }
            return Id == (obj as IdName).Id;
        }
    }
    public class IdNamePath : IdName
    {
        public string Path { get; set; }
    }
    public class IdNameGroup : IdName
    {
        public int GroupId { get; set; }
    }
}