using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace jsonpdemo.Models
{
    public  class ScenariosData
    {
        private static ScenariosData _Instance;
        public static ScenariosData Instance
        {
            get
            {
                if (_Instance == null)
                {
                    _Instance = new ScenariosData();
                    LoadData();
                }

                return _Instance;
            }
        }
        private  List<Scenario> _scenrioLst;
        private static void LoadData()
        {
             Scenario sce = new Scenario(){
                 Description = "test scenario",
                 Name = "Scenario name"
            };

            List<Step> steps = new List<Step>(){
                new Step(){ Id = 1, Name ="Step 1", Type = "div", BubbleText = "step 1 text", SearchProp = "div", SearchPropName ="" },
                new Step(){ Id = 2,Name ="Step 2", Type = "a", BubbleText = "step 2 text", SearchProp = "a", SearchPropName ="" }
            };

            sce.Steps = steps;

            Scenario sce2 = new Scenario()
            {
                Description = "ST 2",
                Name = "My Name"
            };
          
            List<Step> stepsSC2 = new List<Step>(){
                new Step(){Id = 3, Name ="SC2 Step 1", Type = "div", BubbleText = "Sc2 text", SearchProp = "div", SearchPropName ="" },
                new Step(){Id = 4, Name ="SC2 Step 2", Type = "a", BubbleText = "SC2 2 text", SearchProp = "a", SearchPropName ="" },
                new Step(){Id = 4, Name ="SC2 Step 3", Type = "a", BubbleText = "SC2 3 text", SearchProp = "a", SearchPropName ="" }
        
            };

            sce2.Steps = stepsSC2;

            _Instance._scenrioLst = new List<Scenario>() { sce, sce2 };
        }
    

        public  Scenario GetScenario(){
            return Instance._scenrioLst.First();
        }

        public  List<Scenario> GetScenarios()
        {
            return Instance._scenrioLst;
        }

    }
}