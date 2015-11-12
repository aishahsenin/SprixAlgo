using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace WpfTest.ViewModel.Commands
{
    public class SimpleCommand : ICommand
    {
        public event EventHandler CanExecuteChanged;

        // creating a viewModel using stuff from the ViewModelBase
        public ViewModelBase ViewModel { get; set; }
        
        // creating a constructor that returns stuff from the ViewModelBase 
        public SimpleCommand(ViewModelBase viewModel)
        {
            this.ViewModel = viewModel;
        }

        public bool CanExecute(object parameter)
        {
            //throw new NotImplementedException();
            return true;
        }

        // Executing the simple method
        public void Execute(object parameter)
        {
            // calling the simple method from the ViewModel
            this.ViewModel.SimpleMethod();
        }
    }
}
