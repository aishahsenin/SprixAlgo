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

        public SortAlgorithm()
        {
            PassValue = 0;
        }

        public SortAlgorithm dummyData()
        {
            SortAlgorithm sortFormDetails = new SortAlgorithm();
            sortFormDetails.PassValue = 1; // TODO; might need to change
            sortFormDetails.ValuesArray = new int[] { 3, 5, 6, 7 };
            sortFormDetails.NoOfIndex = sortFormDetails.ValuesArray.Length;
            sortFormDetails.temp = 0;

            return sortFormDetails;
        }

        // This method retrieves the form type, 1 = sort form type
        public int GetFormType()
        {
            int formTypeValue = 1;

            return formTypeValue;
        }

    }

}