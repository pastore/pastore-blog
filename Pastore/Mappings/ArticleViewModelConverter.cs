using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Pastore.Model.Models;
using AutoMapper;
using Pastore.ViewModels;

namespace Pastore.Mappings
{
    public class ArticleViewModelConverter : ITypeConverter<Article, ArticleViewModel>
    {
        public ArticleViewModel Convert(Article source, ArticleViewModel destination, ResolutionContext context)
        {
            var model = new ArticleViewModel
            {
                Id = source.Id,
                ArticleName = source.ArticleName,
                ArticleDescription = source.ArticleDescription,
                ArticleContent = source.ArticleContent,
                UrlViewDemo = source.UrlViewDemo,
                DateCreated = source.DateCreated,
                DateUpdated = source.DateUpdated,
                CategoryId = source.Categories.Select(x => x.Id).ToArray(),
                ArticleFiles = source.ArticleFiles
            };
            return model;
        }
    }
}