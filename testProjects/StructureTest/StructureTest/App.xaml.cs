using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Windows;

namespace StructureTest
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
        // Overriding the existing startup window
        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);
            
            // creating a new object window using MainWindow, injecting the view model
            MainWindow window = new MainWindow();
            window.Show();
        }

    }
}
