using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Windows;
using WpfTest.ViewModel;

namespace WpfTest
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {

        protected override void OnStartup(StartupEventArgs e)
        {
            // when the application starts up...
            base.OnStartup(e);

            // creates a new instance of the MainWindow...
            MainWindow window = new MainWindow(); 

            // The window view model goes with it...
            var viewModel = new MainWindowViewModel();

            // Setting the data context to that view model, which is the logic of the view
            window.DataContext = viewModel;

            window.Show();
        }

    }
}
