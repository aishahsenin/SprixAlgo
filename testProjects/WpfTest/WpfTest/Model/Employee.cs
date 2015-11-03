using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfTest.Model
{
    public class Employee
    {

        public static Employee CreateEmployee(string firstName, string lastName)
        {

            return new Employee { FirstName = firstName, LastName = lastName };

        }
        public string FirstName { get; set; }
        public string LastName { get; set; }

    }
}
