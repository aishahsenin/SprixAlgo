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
        // animation bit
        public SortAlgorithm dummyAnimation { get; set; }
        public KnapsackAlgorithm dummyKnapsackAnimation { get; set; }
        public int TypeId { get; set; }

        // knapsack data
        public KnapsackAlgorithm knapsackAnimationData { get; set; }

        // sort data
        public SortAlgorithm sortAnimationData { get; set; }

        // navigational bar
        public List<Algorithm> algoNavBar { get; set; }
        public AlgoParadigmType algoDetails { get; set; }
    }
}