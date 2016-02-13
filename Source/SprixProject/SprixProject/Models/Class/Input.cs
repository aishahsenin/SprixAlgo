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

        public Input GetSortInputForm()
        {
            Input sortInput = new Input();

            sortInput.NoOfIndex = 0;
            sortInput.IndexValue = new List<int>();

            return sortInput;
        }
    }



}