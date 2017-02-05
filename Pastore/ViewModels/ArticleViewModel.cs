using Pastore.Model.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Pastore.ViewModels
{
    public class ArticleViewModel
    {
        public int Id { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime? DateUpdated { get; set; }
        [Required]
        public string ArticleName { get; set; }
        [Required]
        public string ArticleDescription { get; set; }
        public string ArticleContent { get; set; }
        public string UrlViewDemo { get; set; }
        public ApplicationUser User { get; set; }
        [Required]
        public int[] CategoryId { get; set; }
        public MultiSelectList Categories { get; set; }
        public IEnumerable<ArticleFile> ArticleFiles { get; set; }
    }
    public class ArticleHomeViewModel
    {
        public int Id { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime? DateUpdated { get; set; }
        public string ArticleName { get; set; }
        public string ArticleDescription { get; set; }
        public string ArticleContent { get; set; }
        public string UrlViewDemo { get; set; }
        public ApplicationUser User { get; set; }
        public IEnumerable<Category> Categories { get; set; }
        public IEnumerable<ArticleFile> ArticleFiles { get; set; }
    }
}