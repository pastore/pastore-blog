using System.Web.Mvc;

namespace Pastore.Areas.CSS
{
    public class CSSAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "CSS";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Css_Animation",
                "demo/animation",
                new { area = AreaName, controller = "General", action = "Animation", id = UrlParameter.Optional }
            );
        }
    }
}