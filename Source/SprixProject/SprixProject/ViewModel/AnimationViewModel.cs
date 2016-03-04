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
    }
}