using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SprixReference.Startup))]
namespace SprixReference
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
