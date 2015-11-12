using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.ObjectModel;
using WpfTest.DataAccess;

namespace WpfTest.ViewModel
{
    class EmployeeListViewModel : ViewModelBase
    {

        // need an instance of employee repository
        readonly EmployeeRepository _employeeRepository;

        // enable to repo to be consumed by the view
        // getting the list from the employee class
        public ObservableCollection<Model.Employee> AllEmployees
        {
            get;
            private set; // don't want to be set from the outside
        }

        // Constructor
        // if list returns empty, throw exception, if not, make the list initiated at the beginning of this class to equal to the list from employee repo
        public EmployeeListViewModel(EmployeeRepository employeeRepository)
        {
            if (employeeRepository == null)
            {
                throw new ArgumentNullException("Employee repository is empty");
            }

            _employeeRepository = employeeRepository;
            this.AllEmployees = new ObservableCollection<Model.Employee>(_employeeRepository.GetEmployees());
        }

        // override OnDispose method from ViewModelBase...
        protected override void OnDispose()
        {
            this.AllEmployees.Clear();
        }
    }
}
