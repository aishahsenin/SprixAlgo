using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.ObjectModel;
using WpfTest.DataAccess;

namespace WpfTest.ViewModel
{
    // inheriting from ViewModelBase class
    public class MainWindowViewModel : ViewModelBase
    {

        // reference from the employee repository
        readonly EmployeeRepository _employeeRepository;

        // view model collection, using the view model to display the view
        ObservableCollection<ViewModelBase> _viewModels;

        public MainWindowViewModel()
        {
            _employeeRepository = new EmployeeRepository();
            
            // TODO; create an instance of our view model to display, then add to our collection
            EmployeeListViewModel viewModel = new EmployeeListViewModel(_employeeRepository);
            
            // added the viewModel collections to the collections in here, this will show on the main window
            this.ViewModels.Add(viewModel);
        }

        // ViewModels, what we used to reference on the XAML code on MainWindow.xaml
        // property of the ViewModel that will be accessible from the View
        public ObservableCollection<ViewModelBase> ViewModels
        {
            get
            {
                if (_viewModels == null)
                {
                    _viewModels = new ObservableCollection<ViewModelBase>();
                }

                return _viewModels;
            }
        }

    }
}
