using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SprixProject.Models.Class
{
    public class KnapsackAlgorithm
    {
        public String Name;
        public int Capacity;
        public int[] Items;

        public KnapsackAlgorithm(){}

        public KnapsackAlgorithm(int Capacity, int[] Items)
        {
            Capacity = this.Capacity;
            Items = this.Items;
        } 

        public KnapsackAlgorithm dummyFractionalKnapsack()
        {
            KnapsackAlgorithm knapsackDetails = new KnapsackAlgorithm();
            knapsackDetails.Name = "Fractional Knapsack";
            knapsackDetails.Capacity = 50;
            knapsackDetails.Items = new int[] { 2, 13, 4, 7, 18, 12 };
            return knapsackDetails;
        }

    }
}