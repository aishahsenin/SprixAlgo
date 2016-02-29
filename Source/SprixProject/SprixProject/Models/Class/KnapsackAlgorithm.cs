using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SprixProject.Models.Class
{
    public class KnapsackAlgorithm
    {
        public int Capacity;
        public List<int> ItemsList;

        public KnapsackAlgorithm(){}

        public KnapsackAlgorithm(int Capacity, List<int> ItemsList)
        {
            Capacity = this.Capacity;
            ItemsList = this.ItemsList;
        }

        public KnapsackAlgorithm dummyFractionalKnapsack()
        {
            KnapsackAlgorithm knapsackDetails = new KnapsackAlgorithm();
            knapsackDetails.Capacity = 50;
            knapsackDetails.ItemsList.Add(6);
            knapsackDetails.ItemsList.Add(12);
            knapsackDetails.ItemsList.Add(3);
            knapsackDetails.ItemsList.Add(21);
            knapsackDetails.ItemsList.Add(14);
            knapsackDetails.ItemsList.Add(8);

            return knapsackDetails;
        }

    }
}