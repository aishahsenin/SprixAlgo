using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SprixProject.Models.Class;

namespace SprixProject.ViewModel
{
    public class KnapViewModel
    {
        // for dummy stuff
        public KnapsackAlgorithm knapsackDummyData { get; set; }
        public int TypeId { get; set; }

        // for knapsack form
        public KnapsackAlgorithm knapsackAlgorithmDetails { get; set; }
        public KnapsackAlgorithm knapsackForm { get; set; }
    }
}