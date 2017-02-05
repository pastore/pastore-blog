using Microsoft.Owin;
using Owin;
using Pastore.Utility;

[assembly: OwinStartupAttribute(typeof(Pastore.Startup))]
namespace Pastore
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            //app.Use<GlobalExceptionMiddleware>();
            ConfigureAuth(app);
        }
    }
}
