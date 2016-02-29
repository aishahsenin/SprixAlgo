using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SprixProject.Models.Class
{
    public class Input
    {
        [Required(ErrorMessage = "No of index required.")]
        public int NoOfIndex { get; set; }

        [Required(ErrorMessage = "You need to input these values.")]
        public List<int> IndexValue { get; set; }

        [Required(ErrorMessage = "Please enter the item value.")]
        public List<int> ItemValue { get; set; }

        [Required(ErrorMessage = "Please enter the capacity of the knapsack.")]
        public double Capacity { get; set; }


        // constructors
        // default
        public Input() { }

        // ctor for sort forms
        public Input(int NoOfIndex, List<int> IndexValue)
        {
            NoOfIndex = 0;
            IndexValue = new List<int>();
        }

        // ctor for knapsack forms
        public Input(double Capacity, List<int> ItemValue)
        {
            Capacity = 0;
            ItemValue = new List<int>();
        }

        // METHODS
        public Input GetSortInputForm()
        {
            Input sortInput = new Input();
            sortInput.NoOfIndex = 0;
            sortInput.IndexValue = new List<int>();
            return sortInput;
        }

        // Knapsack input form
        public Input GetKnapsackInputForm()
        {
            Input knapsackFormInput = new Input();
            knapsackFormInput.Capacity = 0;
            knapsackFormInput.IndexValue = new List<int>();
            return knapsackFormInput;
        }
    }



}