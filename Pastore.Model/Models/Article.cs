using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pastore.Model.Models
{
    public class Article
    {
        public Article()
        {
            DateCreated = DateTime.Now;
            ArticleFiles = new List<ArticleFile>();
        }
        public int Id { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime? DateUpdated { get; set; }
        public string ArticleName { get; set; }
        public string ArticleDescription { get; set; }
        public string ArticleContent { get; set; }
        public string UrlViewDemo{ get; set; }
        public bool IsPublish { get; set; }
        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
        public virtual ICollection<Category> Categories { get; set; }
        public virtual ICollection<ArticleFile> ArticleFiles { get; set; }
    }
}
