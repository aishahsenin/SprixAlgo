using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SprixProject.Models
{
    class AlgorithmRepository
    {

        private SprixModelDataContext db = new SprixModelDataContext();

        public IQueryable<Algorithm> FindAllAlgorithm()
        {
            return db.Algorithms;
        }

        public IQueryable<Algorithm> FindParadigmTypeAlgorithm(int id)
        {
            return from Algorithm in db.Algorithms
                   where Algorithm.ParadigmTypeId == id
                   select Algorithm;
        }

        public IQueryable<Algorithm> FindSpecificAlgorithm(int id)
        {
            return from Algorithm in db.Algorithms
                   where Algorithm.Id == id
                   select Algorithm;
        }

        public Algorithm GetAlgorithm(int id)
        {
            return db.Algorithms.SingleOrDefault(d => d.Id == id);
        }

        // TODO; Insert/Delete methods

        // Persistence
        public void Save()
        {
            db.SubmitChanges();
        }

        // TODO; Inner join using two tables (Algorithms and ParadigmType). Need to show this onto view
        public IQueryable<AlgoParadigmType> FindThis(int id)
        {
            return from n in db.Algorithms
                   join c in db.ParadigmTypes on n.ParadigmTypeId equals c.Id
                   where n.Id == id
                   select new AlgoParadigmType()
                   {
                       AlgorithmName = n.Name,
                       ParadigmType = c.Name,
                       AlgorithmDescription = n.Description
                   };
        }

    }

    public class AlgoParadigmType
    {
        public String AlgorithmName { get; set; }
        public String ParadigmType { get; set; }
        public String AlgorithmDescription { get; set; }
    }

}
