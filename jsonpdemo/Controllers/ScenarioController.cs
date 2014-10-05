using jsonpdemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace jsonpdemo.Controllers
{
    public class ScenarioController : ApiController
    {
        // GET: api/Scenario
        public List<Scenario> Get()
        {
            return ScenariosData.GetScenarios();
        }

        // GET: api/Scenario/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Scenario
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Scenario/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Scenario/5
        public void Delete(int id)
        {
        }
    }
}
