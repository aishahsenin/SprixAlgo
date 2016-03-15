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

    }

}