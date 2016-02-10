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

        // This query is used to display the side nav bar
        public IQueryable<Algorithm> FindSameParadigmTypeAlgorithm(int id)
        {

            var algorithmId = (from Algorithm in db.Algorithms
                              where Algorithm.Id == id
                              select Algorithm.ParadigmTypeId).SingleOrDefault();

            return from Algorithm in db.Algorithms
                   where Algorithm.ParadigmTypeId == algorithmId
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

        // Note: Pay attention to this query. Very important
        public IQueryable<AlgoParadigmType> FindThis(int id)
        {
            return from n in db.Algorithms
                   join c in db.ParadigmTypes on n.ParadigmTypeId equals c.Id
                   join d in db.AlgorithmTypes on n.AlgorithmTypeId equals d.Id
                   where n.Id == id
                   select new AlgoParadigmType()
                   {
                       AlgorithmName = n.Name,
                       ParadigmType = c.Name,
                       AlgorithmDescription = n.Description,
                       AlgorithmType = d.Id
                   };
        }

    }

    // New classes for inner join type queries
    public class AlgoParadigmType
    {
        public String AlgorithmName { get; set; }
        public String ParadigmType { get; set; }
        public String AlgorithmDescription { get; set; }
        public int AlgorithmType { get; set; }
    }

}
