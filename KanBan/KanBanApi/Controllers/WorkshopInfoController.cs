using JuQent.Service.DataUtility;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace Juqent.CPS.MvcWebApi.Controllers
{
    public class WorkshopInfoController : ApiController
    {
        private const string DaDbName = "Default";

        [HttpPost]
        public HttpResponseMessage GetTop15()
        {
            try
            {
                using (DapperDbContext Context = new DapperDbContext(DaDbName))
                {
                    string sql1 = string.Format(@"SELECT TOP 15 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='温度'  order by C.AddDate DESC
");
                    var listTemperature = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    string sql2 = string.Format(@"SELECT TOP 15 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='湿度'  order by C.AddDate DESC
");
                    var listHumidity = Context.Query<TemperatureAndHumidity>(sql2).ToList();


                    var jsonstr = new { part1 = listTemperature, part2 = listHumidity };
                    string json = JsonConvert.SerializeObject(jsonstr);
                    //返回纯文本text/plain  ,返回json application/json  ,返回xml text/xml
                    HttpResponseMessage result = new HttpResponseMessage { Content = new StringContent(json, Encoding.GetEncoding("UTF-8"), "application/json") };
                    return result;

                }
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage { Content = new StringContent(JsonConvert.SerializeObject(ex.Message), Encoding.GetEncoding("UTF-8"), "application/json") };
            }
        }

        [HttpPost]
        public HttpResponseMessage GetCurrent()
        {
            try
            {
                using (DapperDbContext Context = new DapperDbContext(DaDbName))
                {
                    string sql1 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity where ParamName='温度' order by AddDate DESC
");
                    var listTemperature = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    string sql2 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity  where ParamName='湿度' order by AddDate DESC
");
                    var listHumidity = Context.Query<TemperatureAndHumidity>(sql2).ToList();


                    var jsonstr = new { part1 = listTemperature, part2 = listHumidity };
                    string json = JsonConvert.SerializeObject(jsonstr);
                    //返回纯文本text/plain  ,返回json application/json  ,返回xml text/xml
                    HttpResponseMessage result = new HttpResponseMessage { Content = new StringContent(json, Encoding.GetEncoding("UTF-8"), "application/json") };
                    return result;

                }
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage { Content = new StringContent(JsonConvert.SerializeObject(ex.Message), Encoding.GetEncoding("UTF-8"), "application/json") };
            }
        }
    }
}