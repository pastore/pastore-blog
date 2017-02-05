using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pastore.Model.Models
{
    public class ArticleFile
    {
        public int Id { get; set; }
        public string FileName { get; set; }
        public ArticleFileType ArticleFileType { get; set; }
        public int ArticleId { get; set; }
        public virtual Article Article { get; set; }
    }

    public enum ArticleFileType
    {
        TeaserImage = 1
    }
}
