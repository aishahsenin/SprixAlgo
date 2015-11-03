using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel;

namespace WpfTest.ViewModel
{
    public abstract class ViewModelBase : INotifyPropertyChanged, IDisposable
    {

        protected ViewModelBase()
        {

        }

        // Declaring a new PropertyChangedEventHandler 
        // Occurs when a property value changes 
        // The PropertyChanged event can indicate all properties on the object have changed by using either null or String.Empty as the property name in the PropertyChangedEventArgs
        public event PropertyChangedEventHandler PropertyChanged;

        protected virtual void OnPropertyChanged(string propertyName)
        {
            PropertyChangedEventHandler handler = this.PropertyChanged;

            if (handler != null)
            {
                // firing this property, property name
                var e = new PropertyChangedEventArgs(propertyName);
                handler(this, e);
            }
        }

        public void Dispose()
        {
            this.OnDispose();
        }

        protected virtual void OnDispose()
        {

        }

        // will be overriden on any subclass that needs it.
    }
}
