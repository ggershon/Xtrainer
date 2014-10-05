using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace jsonpdemo.Models
{
    public static class ScenariosData
    {
        private static List<Scenario> _scenrioLst;
        public ScenariosData()
        {
             Scenario sce = new Scenario(){
                 Description = "test scenario",
                 Name = "Scenario name"
            };

            List<Step> steps = new List<Step>(){
                new Step(){ Name ="Step 1", Type = "div", BubbleText = "step 1 text", SearchProp = "div", SearchPropName ="" },
                new Step(){ Name ="Step 2", Type = "a", BubbleText = "step 2 text", SearchProp = "a", SearchPropName ="" }
            };

            Scenario sce2 = new Scenario()
            {
                Description = "ST 2",
                Name = "My Name"
            };

            List<Step> stepsSC2 = new List<Step>(){
                new Step(){ Name ="SC2 Step 1", Type = "div", BubbleText = "Sc2 text", SearchProp = "div", SearchPropName ="" },
                new Step(){ Name ="SC2 Step 2", Type = "a", BubbleText = "SC2 2 text", SearchProp = "a", SearchPropName ="" }
            };

            _scenrioLst = new List<Scenario>() { sce, sce2 };
        }
    

        public static Scenario GetScenario(){
            return _scenrioLst.First();
        }

        public static List<Scenario> GetScenarios()
        {
            return _scenrioLst;
        }

    }
}