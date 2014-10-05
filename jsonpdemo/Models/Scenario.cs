using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace jsonpdemo.Models
{
    public class Scenario
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public List<Step> Steps { get; set; }
        public string IconUrl { get; set; }
    }
}