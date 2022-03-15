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


        #region SMT
        [HttpPost]
        public HttpResponseMessage GetSMTTop24()
        {
            try
            {
                using (DapperDbContext Context = new DapperDbContext(DaDbName))
                {
                    #region  EQP1001
                    string sql1 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='温度' and EqpCode = '1001' order by C.AddDate DESC
");
                    var listTemperature1 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    string sql2 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='湿度'  and EqpCode = '1001' order by C.AddDate DESC
");
                    var listHumidity1 = Context.Query<TemperatureAndHumidity>(sql2).ToList();
                    #endregion

                    #region  EQP1002
                    sql1 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='温度' and EqpCode = '1002' order by C.AddDate DESC
");
                    var listTemperature2 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    sql2 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='湿度'  and EqpCode = '1002' order by C.AddDate DESC
");
                    var listHumidity2 = Context.Query<TemperatureAndHumidity>(sql2).ToList();
                    #endregion


                    #region  EQP1003
                    sql1 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='温度' and EqpCode = '1003' order by C.AddDate DESC
");
                    var listTemperature3 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    sql2 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='湿度'  and EqpCode = '1003' order by C.AddDate DESC
");
                    var listHumidity3 = Context.Query<TemperatureAndHumidity>(sql2).ToList();
                    #endregion

         

                    var jsonstr = new
                    {
                        data_t1 = listTemperature1,
                        data_h1 = listHumidity1,
                        data_t2 = listTemperature2,
                        data_h2 = listHumidity2,
                        data_t3 = listTemperature3,
                        data_h3 = listHumidity3
                    };

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
        public HttpResponseMessage GetSMTCurrent()
        {
            try
            {
                using (DapperDbContext Context = new DapperDbContext(DaDbName))
                {
                    #region EQP1001
                    string sql1 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C where ParamName='温度' and EqpCode = '1001' order by C.AddDate DESC
");
                    var listTemperature1 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    string sql2 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C  where ParamName='湿度' and EqpCode = '1001' order by C.AddDate DESC
");
                    var listHumidity1 = Context.Query<TemperatureAndHumidity>(sql2).ToList();

                    #endregion

                    #region EQP1002
                    sql1 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C where ParamName='温度' and EqpCode = '1002' order by C.AddDate DESC
");
                    var listTemperature2 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    sql2 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C  where ParamName='湿度' and EqpCode = '1002' order by C.AddDate DESC
");
                    var listHumidity2 = Context.Query<TemperatureAndHumidity>(sql2).ToList();

                    #endregion

                    #region EQP1003
                    sql1 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C where ParamName='温度' and EqpCode = '1003' order by C.AddDate DESC
");
                    var listTemperature3 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    sql2 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C  where ParamName='湿度' and EqpCode = '1003' order by C.AddDate DESC
");
                    var listHumidity3 = Context.Query<TemperatureAndHumidity>(sql2).ToList();

                    #endregion


                    var jsonstr = new
                    {
                        data_t1 = listTemperature1,
                        data_h1 = listHumidity1,
                        data_t2 = listTemperature2,
                        data_h2 = listHumidity2,
                        data_t3 = listTemperature3,
                        data_h3 = listHumidity3
                    };
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



        #endregion

        #region NB
        [HttpPost]
        public HttpResponseMessage GetNBTop24()
        {
            try
            {
                using (DapperDbContext Context = new DapperDbContext(DaDbName))
                {
                    #region  EQP1008
                    string sql1 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='温度' and EqpCode = '1008' order by C.AddDate DESC
");
                    var listTemperature8 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    string sql2 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='湿度'  and EqpCode = '1008' order by C.AddDate DESC
");
                    var listHumidity8 = Context.Query<TemperatureAndHumidity>(sql2).ToList();
                    #endregion

                    #region  EQP1009
                    sql1 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='温度' and EqpCode = '1009' order by C.AddDate DESC
");
                    var listTemperature9 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    sql2 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='湿度'  and EqpCode = '1009' order by C.AddDate DESC
");
                    var listHumidity9 = Context.Query<TemperatureAndHumidity>(sql2).ToList();
                    #endregion


                    var jsonstr = new
                    {
                        data_t8 = listTemperature8,
                        data_h8 = listHumidity8,
                        data_t9 = listTemperature9,
                        data_h9 = listHumidity9
                    };

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
        public HttpResponseMessage GetNBCurrent()
        {
            try
            {
                using (DapperDbContext Context = new DapperDbContext(DaDbName))
                {
                    #region EQP1008
                    string sql1 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C where ParamName='温度' and EqpCode = '1008' order by C.AddDate DESC
");
                    var listTemperature8 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    string sql2 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C  where ParamName='湿度' and EqpCode = '1008' order by C.AddDate DESC
");
                    var listHumidity8 = Context.Query<TemperatureAndHumidity>(sql2).ToList();

                    #endregion

                    #region EQP1009
                    sql1 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C where ParamName='温度' and EqpCode = '1009' order by C.AddDate DESC
");
                    var listTemperature9 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    sql2 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C  where ParamName='湿度' and EqpCode = '1009' order by C.AddDate DESC
");
                    var listHumidity9 = Context.Query<TemperatureAndHumidity>(sql2).ToList();

                    #endregion


                    var jsonstr = new
                    {
                        data_t8 = listTemperature8,
                        data_h8 = listHumidity8,
                        data_t9 = listTemperature9,
                        data_h9 = listHumidity9
                    };
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



        #endregion

        #region  FATP
        [HttpPost]
        public HttpResponseMessage GetFATPTop24()
        {
            try
            {
                using (DapperDbContext Context = new DapperDbContext(DaDbName))
                {
                    #region  EQP1004
                    string sql1 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='温度' and EqpCode = '1004' order by C.AddDate DESC
");
                    var listTemperature4 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    string sql2 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='湿度'  and EqpCode = '1004' order by C.AddDate DESC
");
                    var listHumidity4 = Context.Query<TemperatureAndHumidity>(sql2).ToList();
                    #endregion

                    #region  EQP1005
                    sql1 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='温度' and EqpCode = '1005' order by C.AddDate DESC
");
                    var listTemperature5 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    sql2 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='湿度'  and EqpCode = '1005' order by C.AddDate DESC
");
                    var listHumidity5 = Context.Query<TemperatureAndHumidity>(sql2).ToList();
                    #endregion


                    #region  EQP1006
                    sql1 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='温度' and EqpCode = '1006' order by C.AddDate DESC
");
                    var listTemperature6 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    sql2 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='湿度'  and EqpCode = '1006' order by C.AddDate DESC
");
                    var listHumidity6 = Context.Query<TemperatureAndHumidity>(sql2).ToList();
                    #endregion

                    #region  EQP1007
                    sql1 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='温度' and EqpCode = '1007' order by C.AddDate DESC
");
                    var listTemperature7 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    sql2 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='湿度'  and EqpCode = '1007' order by C.AddDate DESC
");
                    var listHumidity7 = Context.Query<TemperatureAndHumidity>(sql2).ToList();
                    #endregion

                    var jsonstr = new {
                        data_t4 = listTemperature4,
                        data_h4 = listHumidity4,
                        data_t5 = listTemperature5,
                        data_h5 = listHumidity5,
                        data_t6 = listTemperature6,
                        data_h6 = listHumidity6,
                        data_t7 = listTemperature7,
                        data_h7 = listHumidity7
                    };

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
        public HttpResponseMessage GetFATPCurrent()
        {
            try
            {
                using (DapperDbContext Context = new DapperDbContext(DaDbName))
                {
                    #region EQP1004
                    string sql1 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C where ParamName='温度' and EqpCode = '1004' order by C.AddDate DESC
");
                    var listTemperature4 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    string sql2 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C  where ParamName='湿度' and EqpCode = '1004' order by C.AddDate DESC
");
                    var listHumidity4 = Context.Query<TemperatureAndHumidity>(sql2).ToList();

                    #endregion

                    #region EQP1005
                    sql1 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C where ParamName='温度' and EqpCode = '1005' order by C.AddDate DESC
");
                    var listTemperature5 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    sql2 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C  where ParamName='湿度' and EqpCode = '1005' order by C.AddDate DESC
");
                    var listHumidity5 = Context.Query<TemperatureAndHumidity>(sql2).ToList();

                    #endregion

                    #region EQP1006
                    sql1 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C where ParamName='温度' and EqpCode = '1006' order by C.AddDate DESC
");
                    var listTemperature6 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    sql2 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C  where ParamName='湿度' and EqpCode = '1006' order by C.AddDate DESC
");
                    var listHumidity6 = Context.Query<TemperatureAndHumidity>(sql2).ToList();

                    #endregion

                    #region EQP1007
                    sql1 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C where ParamName='温度' and EqpCode = '1007' order by C.AddDate DESC
");
                    var listTemperature7 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    sql2 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C  where ParamName='湿度' and EqpCode = '1007' order by C.AddDate DESC
");
                    var listHumidity7 = Context.Query<TemperatureAndHumidity>(sql2).ToList();

                    #endregion

                    var jsonstr = new {
                        data_t4 = listTemperature4,
                        data_h4 = listHumidity4,
                        data_t5 = listTemperature5,
                        data_h5 = listHumidity5,
                        data_t6 = listTemperature6,
                        data_h6 = listHumidity6,
                        data_t7 = listTemperature7,
                        data_h7 = listHumidity7
                    };
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
        #endregion

        #region WareHouse
        [HttpPost]
        public HttpResponseMessage GetWarehouseTop24()
        {
            try
            {
                using (DapperDbContext Context = new DapperDbContext(DaDbName))
                {
                    #region  EQP1010
                    string sql1 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='温度' and EqpCode = '1010' order by C.AddDate DESC
");
                    var listTemperature10 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    string sql2 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='湿度'  and EqpCode = '1010' order by C.AddDate DESC
");
                    var listHumidity10 = Context.Query<TemperatureAndHumidity>(sql2).ToList();
                    #endregion

                    #region  EQP1011
                    sql1 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='温度' and EqpCode = '1011' order by C.AddDate DESC
");
                    var listTemperature11 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    sql2 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='湿度'  and EqpCode = '1011' order by C.AddDate DESC
");
                    var listHumidity11 = Context.Query<TemperatureAndHumidity>(sql2).ToList();
                    #endregion


                    #region  EQP1012
                    sql1 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='温度' and EqpCode = '1012' order by C.AddDate DESC
");
                    var listTemperature12 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    sql2 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='湿度'  and EqpCode = '1012' order by C.AddDate DESC
");
                    var listHumidity12 = Context.Query<TemperatureAndHumidity>(sql2).ToList();
                    #endregion

                    #region  EQP1013
                    sql1 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='温度' and EqpCode = '1013' order by C.AddDate DESC
");
                    var listTemperature13= Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    sql2 = string.Format(@"SELECT TOP 24 * FROM   dbo.EqpData_TemperatureAndHumidity  C
where ParamName='湿度'  and EqpCode = '1013' order by C.AddDate DESC
");
                    var listHumidity13 = Context.Query<TemperatureAndHumidity>(sql2).ToList();
                    #endregion

                    var jsonstr = new
                    {
                        data_t10 = listTemperature10,
                        data_h10 = listHumidity10,
                        data_t11 = listTemperature11,
                        data_h11 = listHumidity11,
                        data_t12 = listTemperature12,
                        data_h12 = listHumidity12,
                        data_t13 = listTemperature13,
                        data_h13 = listHumidity13
                    };

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
        public HttpResponseMessage GetWarehouseCurrent()
        {
            try
            {
                using (DapperDbContext Context = new DapperDbContext(DaDbName))
                {
                    #region EQP1010
                    string sql1 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C where ParamName='温度' and EqpCode = '1010' order by C.AddDate DESC
");
                    var listTemperature10 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    string sql2 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C  where ParamName='湿度' and EqpCode = '1010' order by C.AddDate DESC
");
                    var listHumidity10 = Context.Query<TemperatureAndHumidity>(sql2).ToList();

                    #endregion

                    #region EQP1011
                    sql1 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C where ParamName='温度' and EqpCode = '1011' order by C.AddDate DESC
");
                    var listTemperature11 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    sql2 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C  where ParamName='湿度' and EqpCode = '1011' order by C.AddDate DESC
");
                    var listHumidity11 = Context.Query<TemperatureAndHumidity>(sql2).ToList();

                    #endregion

                    #region EQP1012
                    sql1 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C where ParamName='温度' and EqpCode = '1012' order by C.AddDate DESC
");
                    var listTemperature12 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    sql2 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C  where ParamName='湿度' and EqpCode = '1012' order by C.AddDate DESC
");
                    var listHumidity12 = Context.Query<TemperatureAndHumidity>(sql2).ToList();

                    #endregion

                    #region EQP1013
                    sql1 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C where ParamName='温度' and EqpCode = '1013' order by C.AddDate DESC
");
                    var listTemperature13 = Context.Query<TemperatureAndHumidity>(sql1).ToList();

                    sql2 = string.Format(@"SELECT  TOP 1 *  FROM dbo.EqpData_TemperatureAndHumidity C  where ParamName='湿度' and EqpCode = '1013' order by C.AddDate DESC
");
                    var listHumidity13 = Context.Query<TemperatureAndHumidity>(sql2).ToList();

                    #endregion

                    var jsonstr = new
                    {
                        data_t10 = listTemperature10,
                        data_h10 = listHumidity10,
                        data_t11 = listTemperature11,
                        data_h11 = listHumidity11,
                        data_t12 = listTemperature12,
                        data_h12 = listHumidity12,
                        data_t13 = listTemperature13,
                        data_h13 = listHumidity13
                    };
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

        #endregion


        #region Export
        [HttpPost]
        public HttpResponseMessage GetDataByTime([FromUri]string eqpCode,[FromUri]string paramName, [FromUri] string from , [FromUri] string end)
        {
            try
            {
                using (DapperDbContext Context = new DapperDbContext(DaDbName))
                {
                    #region 
                    string sql1 = string.Format(@"SELECT *
FROM  dbo.EqpData_TemperatureAndHumidity  C
where C.EqpCode ='{0}' 
and C.ParamName = '{1}'
and format(C.AddDate ,'yyyy-MM-dd')  >='{2}'
and format(C.AddDate ,'yyyy-MM-dd')  <='{3}'
order by C.AddDate DESC
", eqpCode, paramName, from, end);


                    var listdata = Context.Query<TemperatureAndHumidity>(sql1).ToList();                  
                    #endregion

                    var jsonstr = new
                    {
                        data = listdata,
                    };

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

        #endregion
    }
}