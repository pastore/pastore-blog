using React;
using System.Collections.Generic;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(Pastore.ReactConfig), "Configure")]

namespace Pastore
{
	public static class ReactConfig
	{
		public static void Configure()
		{
            // If you want to use server-side rendering of React components, 
            // add all the necessary JavaScript files here. This includes 
            // your components as well as all of their dependencies.
            // See http://reactjs.net/ for more information. Example:
            //ReactSiteConfiguration.Configuration
            //	.AddScript("~/Scripts/First.jsx")
            //	.AddScript("~/Scripts/Second.jsx");

            // If you use an external build too (for example, Babel, Webpack,
            // Browserify or Gulp), you can improve performance by disabling 
            // ReactJS.NET's version of Babel and loading the pre-transpiled 
            // scripts. Example:
            ReactSiteConfiguration.Configuration
                .SetLoadBabel(true)
                .AddScriptWithoutTransform("~/Scripts/testEcmaScript.js")
                .SetBabelConfig(new BabelConfig() { Presets = new HashSet<string> { "es2015" , "stage-1" } });

        }
	}
}