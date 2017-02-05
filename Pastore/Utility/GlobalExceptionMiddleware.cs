using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.Owin;

namespace Pastore.Utility
{
    public class GlobalExceptionMiddleware: OwinMiddleware
    {
        public GlobalExceptionMiddleware(OwinMiddleware next) : base(next)
        {
        }

        public override async Task Invoke(IOwinContext context)
        {
            try
            {
                await Next.Invoke(context);
            }
            catch 
            {
                var response = context.Response;
                response.OnSendingHeaders(state =>
                {
                    var resp = (OwinResponse)state;
                    resp.StatusCode = 404;
                    resp.Redirect("/Errors/Error404");
                }, response);
            }
        }
    }
}