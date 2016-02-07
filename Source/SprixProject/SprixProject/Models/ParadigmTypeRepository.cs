using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SprixProject.Models
{
    class ParadigmTypeRepository
    {

        private SprixModelDataContext db = new SprixModelDataContext();

        public ParadigmType GetParadigmType(int id)
        {
            return db.ParadigmTypes.SingleOrDefault(d => d.Id == id);
        }

    }
}
