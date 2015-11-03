using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WpfTest.Model;

namespace WpfTest.DataAccess
{
    public class EmployeeRepository
    {

        readonly List<Employee> _employees;

        public EmployeeRepository()
        {
            if (_employees == null)
            {

                _employees = new List<Employee>();

            }

            _employees.Add(Employee.CreateEmployee("John", "Smith"));
            _employees.Add(Employee.CreateEmployee("Jill", "Jones"));
            _employees.Add(Employee.CreateEmployee("Cath", "Morts"));
        }

        public List<Employee> GetEmployees()
        {

            return new List<Employee>(_employees); // shallow copy our the local _employees list
             
        }

    }
}
