using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;

namespace Juqent.CPS.IMCC
{
    /// <summary>
    /// AjaxBase 的摘要说明
    /// </summary>
    public class AjaxBase : IHttpHandler
    {
        public void ProcessRequest(HttpContext context)
        {
            object result = null;
            string method_name = context.Request["method"];
            if (!string.IsNullOrEmpty(method_name))
            {
                MethodInfo method = this.GetType().GetMethod(method_name);
                if (method != null)
                {
                    result = method.Invoke(this, null);
                }
                else
                {
                    result = new { Success = false, Msg = string.Format("没有找到方法'{0}'", method_name) };
                }
            }
            else
            {
                result = new { Success = false, Msg = "方法名不能为空！" };
            }
            context.Response.ContentType = "text/plain";
            context.Response.Write(result);
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}