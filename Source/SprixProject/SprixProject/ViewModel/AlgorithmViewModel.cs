using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SprixProject.Models;

namespace SprixProject.ViewModel
{
    public class AlgorithmViewModel
    {
        public List<Algorithm> algoNavBar { get; set; }
        public AlgoParadigmType algoDetails { get; set; }

        // TODO; if it's sort type, return this, else...
        public SortAlgorithm algoSortForm { get; set; }

    }
}