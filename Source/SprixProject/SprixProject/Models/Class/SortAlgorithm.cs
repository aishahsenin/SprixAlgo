using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SprixProject.Models
{
    public class SortAlgorithm : Algorithm
    {
        public int PassValue = 1;
        public int NoOfIndex;
        public int[] ValuesArray;
        public int temp; 
        public SortAlgorithm SortAlgorithmModel { get; }

        public SortAlgorithm dummyData()
        {
            SortAlgorithm sortFormDetails = new SortAlgorithm();
            sortFormDetails.PassValue = 1; // might need to change
            sortFormDetails.ValuesArray = new int[] { 3, 5, 6, 7 };
            sortFormDetails.NoOfIndex = sortFormDetails.ValuesArray.Length;
            sortFormDetails.temp = 0;

            return sortFormDetails;
        }

    }

    // Add methods related to sort algorithms
}