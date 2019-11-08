using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(CesiumAspNetDemo.App_Start.Startup))]

namespace CesiumAspNetDemo.App_Start
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}
