using jsonpdemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace jsonpdemo.Controllers
{
    public class ScenarioStepController : ApiController
    {        

        // GET: api/ScenarioStep/5
        // get the next step after the input id step
        public Step Get(int scenarioId, int stepId)
        {
            Scenario sce = ScenariosData.Instance.GetScenario();
            return sce.Steps.Where( a=> a.Id == stepId +1).FirstOrDefault();
        }

        // POST: api/ScenarioStep
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/ScenarioStep/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ScenarioStep/5
        public void Delete(int id)
        {
        }
    }
}
