using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Web;

namespace Juqent.CPS.IMCC
{
    /// <summary>
    /// AjaxHandler 的摘要说明
    /// </summary>
    public class AjaxHandler : AjaxBase
    {
        public object GetData()
        {
            MemoryStream ms = new MemoryStream();
            HttpContent content = new StreamContent(ms);
            content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/json");
            HttpClient client = new HttpClient();
            var response = client.PostAsync("http://192.168.1.101:8001/api/services/dashboard/dashboard/GetReclaminedSand ", content).Result.Content.ReadAsByteArrayAsync().Result;
            var result = "callback(" + response + ")";
            return result;
        }
    }
}