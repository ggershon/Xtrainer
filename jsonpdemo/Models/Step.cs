using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace jsonpdemo.Models
{
    public class Step
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public string SearchPropName { get; set; }
        public string SearchProp { get; set; }
        public string BubbleType { get; set; }
        public string BubbleText { get; set; }
        public int Id { get; set; }
    }
}