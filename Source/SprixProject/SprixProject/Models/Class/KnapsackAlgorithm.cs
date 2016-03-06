using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace SprixProject.Models.Class
{
    public class KnapsackAlgorithm
    {
        [DisplayName("Name")]
        public String Name { get; set; }

        [DisplayName("Capacity")]
        public int Capacity { get; set; }

        [DisplayName("Items")]
        public List<int> Items { get; set; }

        public KnapsackAlgorithm(){}

        public KnapsackAlgorithm(int Capacity, List<int> Items)
        {
            Capacity = this.Capacity;
            Items = this.Items;
        } 

        /* DO NOT DELETE, dummy model
        public KnapsackAlgorithm dummyFractionalKnapsack()
        {
            KnapsackAlgorithm knapsackDetails = new KnapsackAlgorithm();
            knapsackDetails.Name = "Fractional Knapsack";
            knapsackDetails.Capacity = 50;
            knapsackDetails.Items = new int[] { 2, 13, 4, 7, 18, 12 };
            return knapsackDetails;
        }
        */
    }
}