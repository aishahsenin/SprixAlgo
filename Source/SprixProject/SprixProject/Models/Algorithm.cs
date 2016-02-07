using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SprixProject.Models
{
    public partial class Algorithm
    {

        private SprixModelDataContext db = new SprixModelDataContext();

        public IQueryable<Algorithm> FindAllAlgorithm()
        {
            return db.Algorithms;
        }

        public IQueryable<Algorithm> FindGreedyTypeAlgorithm()
        {
            return from Algorithm in db.Algorithms
                   where Algorithm.ParadigmTypeId == 1
                   select Algorithm;
        }

        public IQueryable<Algorithm> FindSpecificAlgorithm(int id)
        {
            return from Algorithm in db.Algorithms
                   where Algorithm.Id == id
                   select Algorithm;
        }

        // TODO; Insert/Delete methods

        // Persistence
        public void Save()
        {
            db.SubmitChanges();
        }

    }
}