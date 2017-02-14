using System.Web.Mvc;

namespace Pastore.Areas.JavaScript
{
    public class JavaScriptAreaRegistration : AreaRegistration 
    {
        public override string AreaName => "JavaScript";

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            #region Knockout
            context.MapRoute(
                "test_knockout",
                "test_knockout",
                new { area = AreaName, controller = "Knockout", action = "Test" }
            );
            context.MapRoute(
                "pager",
                "pager",
                new { area = AreaName, controller = "Knockout", action = "Pager" }
            );
            #endregion

            #region different js
            context.MapRoute(
                "CheckColorPicker",
                "CheckColorPicker",
                new { area = AreaName, controller = "JS", action = "CheckColorPicker" }
            );
            context.MapRoute(
                "color_picker",
                "color-picker",
                new { area = AreaName, controller = "JS", action = "ColorPicker" }
            );
            #endregion

            #region Jquery
            context.MapRoute(
                "fileupload_edit",
                "fileupload_edit",
                new { area = AreaName, controller = "Jquery", action = "FileUploadEdit" }
            );
            context.MapRoute(
                "fileupload",
                "fileupload",
                new { area = AreaName, controller = "Jquery", action = "FileUpload", id = UrlParameter.Optional }
            );
            #endregion
        }
    }
}