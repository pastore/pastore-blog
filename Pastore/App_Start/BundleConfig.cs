using System.Web.Optimization;
using System.Web.Optimization.React;

namespace Pastore
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/JQuery").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/jquery-ui.js",
                        "~/Scripts/jquery.unobtrusive-ajax.js",
                        "~/Scripts/modernizr-*",
                        "~/Scripts/jqModal.js",
                        "~/Scripts/pastore.js",
                        "~/Scripts/pastoreSelect.js",
                        "~/Scripts/pastoreUploadFIle.js",
                        "~/Scripts/pastoreModal.js",
                        "~/Scripts/pastoreSlider3d.js")); 
            bundles.Add(new ScriptBundle("~/Scripts/Knockout").Include(
                        "~/Scripts/knockout-{version}.js",
                        "~/Scripts/knockout.mapping-latest.js"));
            bundles.Add(new ScriptBundle("~/Scripts/jqueryval").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/jquery.unobtrusive*",
                        "~/Scripts/jquery.validate*"
                        ));
            bundles.Add(new BabelBundle("~/Scripts/Babel").Include(
                        "~/Scripts/testEcmaScript.js"));
            bundles.Add(new Bundle("~/Scripts/Root").Include(
                        "~/Scripts/pastoreSelect.js"));
            bundles.Add(new StyleBundle("~/Content/Root").Include(
                      "~/Content/Layouts/normalize.css",
                      "~/Content/Externals/font-awesome.css",
                      "~/Content/Externals/animate.css",
                      "~/Content/Layouts/header.css",
                      "~/Content/Layouts/header_mq.css",
                      "~/Content/Layouts/footer.css",
                      "~/Content/Layouts/side-panel.css",
                      "~/Content/Layouts/grid.css",
                      "~/Content/Components/atomic.css",
                      "~/Content/Components/pastoreSelect.css",
                      "~/Content/Components/buttons.css",
                      "~/Content/Components/modals.css",
                      "~/Content/Components/tables.css",
                      "~/Content/Components/forms.css",
                      "~/Content/Components/panels.css",
                      "~/Content/Components/pager.css"
                      ));
            bundles.Add(new StyleBundle("~/Content/Home").Include(
                     "~/Content/Pages/home.css",
                     "~/Content/Pages/account.css",
                     "~/Content/Pages/userprofile.css",
                     "~/Content/Pages/search.css"
                     ));
            bundles.Add(new StyleBundle("~/Content/Admin").Include(
                     "~/Content/Pages/admin.css"));
        }
    }
}
