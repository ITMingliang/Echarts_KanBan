using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Juqent.CPS.MvcWebApi
{
    public class TemperatureAndHumidity
    {
        public int ID { get; set; }
        public string EqpCode { get; set; }
        public string EqpName { get; set; }
        public string IPAddress { get; set; }
        public string ParamCode { get; set; }
        public string ParamName { get; set; }

        public decimal UpLimit { get; set; }
        public decimal LowerLimit { get; set; }
        public string StandardValue { get; set; }
        public string RealValue { get; set; }
        public string Result { get; set; }
        public string Unit { get; set; }
        public string AddDate { get; set; }
    }
}