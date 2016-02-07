using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SprixProject.Models;

namespace SprixProject.Controllers
{
    public class HomeController : Controller
    {
        // These are all the buttons situated on the header of the page.
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult AnimationStart(int id)
        {
            // List of paradigm types
            //var paradigm = new List<ParadigmType>
            //{
            //    new ParadigmType { ID = 1, Name = "Greedy method", Description = "Description about greedy method " },
            //    new ParadigmType { ID = 2, Name = "Divide and Conquer", Description = "Description about divide and conquer" },
            //    new ParadigmType { ID = 3, Name = "Dynamic Programming", Description = "Description about dynamic programming" }
            //};

            //// TODO; 
            //var algorithm = new List<Algorithm>
            //{
            //    new Algorithm { ID = 1, Title = "Fractional Knapsack Problem", Type = { ID = 1, Name = "Greed", Description = "some desc" } },
            //    new Algorithm { ID = 2, Title = "Activity Scheduling", Type = { ID = 2, Name = "Greed2", Description = "some desc2" } }

            //};

            var algorithm = new Algorithm()
            {
                ID = 1,
                Title = "something",
                Type = { ID = 1, Name = "greedy", Description = "something desc" }
            };

            return View(algorithm);
        }


    }
}