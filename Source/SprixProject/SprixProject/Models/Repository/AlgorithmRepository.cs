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

        // Side navigational bar
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

        // 28/2/16 Working on this
        public int? retrieveFormType(int id)
        {
            var type = (from a in db.Algorithms
                       where a.Id == id
                       select a.FormTypeId).SingleOrDefault();
            return type;
        }

        // Persistence
        public void Save()
        {
            db.SubmitChanges();
        }

        // Retrieves the algorithm details
        public IQueryable<AlgoParadigmType> FindThis(int id)
        {
            return from n in db.Algorithms
                   join c in db.ParadigmTypes on n.ParadigmTypeId equals c.Id
                   where n.Id == id
                   select new AlgoParadigmType()
                   {
                       AlgorithmId = n.Id,
                       AlgorithmName = n.Name,
                       ParadigmType = c.Name,
                       AlgorithmDescription = n.Description,
                       FormType = n.FormTypeId,
                       AlgorithmType = n.AlgorithmTypeId
                   };
        }

    }

    // New classes for inner join type queries
    public class AlgoParadigmType
    {
        public int AlgorithmId { get; set; }
        public String AlgorithmName { get; set; }
        public String ParadigmType { get; set; }
        public String AlgorithmDescription { get; set; }
        public int? FormType { get; set; }
        public int? AlgorithmType { get; set; }
    }

}
