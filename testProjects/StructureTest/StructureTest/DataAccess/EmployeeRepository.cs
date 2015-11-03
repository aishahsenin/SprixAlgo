using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// NOTE: You must add this in order to include the model stuff
using StructureTest.Model;

namespace StructureTest.DataAccess
{
    public class EmployeeRepository
    {
        readonly List<Employee> _employees;

        public EmployeeRepository()
        {
            if (_employees == null)
            {
                // create new employee
                _employees = new List<Employee>();
            }

            // adds new employees
            _employees.Add(Employee.CreateEmploy("John", "Smith"));
            _employees.Add(Employee.CreateEmploy("Jane", "Doe"));
            _employees.Add(Employee.CreateEmploy("Tommy", "Jones"));

        }

        public List<Employee> GetEmployees()
        {
            // shallow copy of our _employee list in here
            return new List<Employee>();
        }

    }
}
