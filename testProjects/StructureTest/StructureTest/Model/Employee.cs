using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StructureTest.Model
{
    public class Employee
    {
        public static Employee CreateEmploy(string firstName, string lastName)
        {
            return new Employee { firstName = firstName, lastName = lastName };
        }

        public string firstName { get; set; }
        public string lastName { get; set; }
    }
}
