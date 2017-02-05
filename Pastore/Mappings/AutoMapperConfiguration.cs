using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using Pastore.Model.Models;
using Pastore.ViewModels;

namespace Pastore.Mappings
{
    public static class AutoMapperConfiguration
    {
        public static void Configure()
        {
            Mapper.Initialize(
                config =>
                {
                    config.CreateMap<Article, ArticleViewModel>().ConvertUsing<ArticleViewModelConverter>();
                    config.CreateMap<Category, CategoryViewModel>();
                    config.CreateMap<ArticleViewModel, Article>();
                    config.CreateMap<CategoryViewModel, Category>();
                    config.CreateMap<Article, ArticleHomeViewModel>();
                });
        }
    }
}