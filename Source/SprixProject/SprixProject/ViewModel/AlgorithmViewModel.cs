using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SprixProject.Models;
using SprixProject.Models.Class;

namespace SprixProject.ViewModel
{
    public class AlgorithmViewModel
    {
        // for sort types
        public List<Algorithm> algoNavBar { get; set; }
        public AlgoParadigmType algoDetails { get; set; }
        public int formType { get; set; }
        public Input form { get; set; } // TODO; input form will be dynamic
        public SortAlgorithm sortDetails{ get; set; } // dummy data 

        // for knapsack types
        public KnapsackAlgorithm knapsackDummyData { get; set; }
    }
}