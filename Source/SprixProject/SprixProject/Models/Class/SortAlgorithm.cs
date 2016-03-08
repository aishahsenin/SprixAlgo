using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace SprixProject.Models
{
    public class SortAlgorithm : Algorithm
    {

        [DisplayName("Index Values")]
        public List<int> IndexValues { get; set; }

        public SortAlgorithm() { }

        public SortAlgorithm(List<int> IndexValues)
        {
            IndexValues = this.IndexValues;
        }

        //public String SortAlgorithmName;
        //public int PassValue = 1;
        //public int NoOfIndex;
        //public int[] ValuesArray;
        //public int temp;
        //public SortAlgorithm SortAlgorithmModel { get; }

            
        
            /*
        public SortAlgorithm dummyData()
        {
            SortAlgorithm sortFormDetails = new SortAlgorithm();
            sortFormDetails.Name = "Bubble sort";
            sortFormDetails.PassValue = 1; // TODO; might need to change
            sortFormDetails.ValuesArray = new int[] { 9, 8, 7, 6, 5 };
            sortFormDetails.NoOfIndex = sortFormDetails.ValuesArray.Length;
            sortFormDetails.temp = 0;

            return sortFormDetails;
        }
        
    */

        // This method retrieves the form type, 1 = sort form type
        /*
        public int GetFormType()
        {
            int formTypeValue = 1;

            return formTypeValue;
        }*/

    }

}