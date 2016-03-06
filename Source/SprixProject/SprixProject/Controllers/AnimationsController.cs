using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SprixProject.Models;
using SprixProject.ViewModel;
using SprixProject.Models.Class;

namespace SprixProject.Controllers
{
    public class AnimationsController : Controller
    {

        AlgorithmRepository algorithmRepository = new AlgorithmRepository();

        public ActionResult Index()
        {
            return View();
        }

        // TODO; 4/3/16
        [HttpPost]
        public ActionResult KnapsackAnimation(int id)
        {

            // TODO; 4/3/16 retrieve knapsack data animation from form
            AnimationViewModel vm = new AnimationViewModel();
            KnapsackAlgorithm knapsack = new KnapsackAlgorithm();


            int noOfInput = Int32.Parse(Request.Form["noOfKnapsackInput"]);

            knapsack.Capacity = Int32.Parse(Request.Form["capacityValue"]);


            List<string> s = new List<string>();

            for (int i = 1; i <= noOfInput; i++)
            {
                int val = Int32.Parse(Request.Form["itemWeight_" + i]); // TODO; 5/3/2016 error on this 
                knapsack.Items.Add(val);
            }

            vm.knapsackAnimationData = knapsack;
            vm.algoNavBar = algorithmRepository.FindSameParadigmTypeAlgorithm(id).ToList();
            vm.algoDetails = algorithmRepository.FindThis(id).SingleOrDefault(); 

            return View(vm);
        }
    }

}