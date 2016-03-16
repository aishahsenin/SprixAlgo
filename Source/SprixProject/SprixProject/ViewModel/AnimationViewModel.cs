using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SprixProject.Models;
using SprixProject.Models.Class;

namespace SprixProject.ViewModel
{
    public class AnimationViewModel
    {
        // knapsack data
        public KnapsackAlgorithm knapsackAnimationData { get; set; }

        // sort data
        public SortAlgorithm sortAnimationData { get; set; }

        // for dynamic form types
        public int noOfIndex { get; set; }

        // navigational bar
        public List<Algorithm> algoNavBar { get; set; }
        public AlgoParadigmType algoDetails { get; set; }
    }
}