namespace Pastore.Data.DataContext
{
    using Microsoft.AspNet.Identity.EntityFramework;
    using Model.Models;
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class DataBaseContext : IdentityDbContext<ApplicationUser>
    {
        public DataBaseContext()
            : base("name=DataBaseContext")
        {
        }
        public virtual DbSet<UserProfile> UserProfiles { get; set; }
        public virtual DbSet<Article> Articles { get; set; }
        public virtual  DbSet<ArticleFile> ArticleFiles { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Fighter> Fighters { get; set; }
        
        public virtual void Commit()
        {
            base.SaveChanges();
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

        }
    }
}