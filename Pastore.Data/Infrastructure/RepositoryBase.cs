﻿using Pastore.Data.DataContext;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Pastore.Data.Infrastructure
{
    public abstract class RepositoryBase<T> where T : class
    {
        private DataBaseContext dataContext;
        private readonly DbSet<T> dbset;
        protected RepositoryBase(IDatabaseFactory databaseFactory)
        {
            DatabaseFactory = databaseFactory;
            dbset = DataContext.Set<T>();
        }
        protected IDatabaseFactory DatabaseFactory
        {
            get;
            private set;
        }

        protected DataBaseContext DataContext => dataContext ?? (dataContext = DatabaseFactory.Get());

        public virtual void Add(T entity)
        {
            dbset.Add(entity);
        }
        public virtual void Update(T entity)
        {
            dbset.Attach(entity);
            dataContext.Entry(entity).State = EntityState.Modified;
        }
        public virtual void Delete(T entity)
        {
            dbset.Remove(entity);
        }
        public virtual void Delete(Expression<Func<T, bool>> where)
        {
            IEnumerable<T> objects = dbset.Where<T>(where).AsEnumerable();
            foreach (T obj in objects)
                dbset.Remove(obj);
        }
        public virtual T GetById(long id)
        {
            return dbset.Find(id);
        }
        public virtual T GetById(string id)
        {
            return dbset.Find(id);
        }
        public T Get(Expression<Func<T, bool>> where)
        {
            return dbset.Where(where).FirstOrDefault<T>();
        }
        public virtual IEnumerable<T> GetAll()
        {
            return dbset.ToList();
        }

        public virtual IEnumerable<T> GetMany(Expression<Func<T, bool>> where)
        {
            return dbset.Where(where).ToList();
        }

        //async
        public virtual async Task<T> GetByIdAsync(long id)
        {
            return await dbset.FindAsync(id);
        }
        public virtual async Task<T> GetByIdAsync(string id)
        {
            return await dbset.FindAsync(id);
        }
        public async Task<T> GetAsync(Expression<Func<T, bool>> where)
        {
            return await dbset.Where(where).FirstOrDefaultAsync<T>();
        }
        public virtual async Task<IEnumerable<T>> GetAllAsync()
        {
            return await dbset.ToListAsync();
        }
        public virtual async Task<IEnumerable<T>> GetManyAsync(Expression<Func<T, bool>> where)
        {
            return await dbset.Where(where).ToListAsync();
        }
    }
}
