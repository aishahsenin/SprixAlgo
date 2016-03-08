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

        [HttpPost]
        public ActionResult SortAnimation(int id)
        {
            AnimationViewModel vm = new AnimationViewModel();
            SortAlgorithm sort = new SortAlgorithm();

            int noOfInput = Int32.Parse(Request.Form["noOfSortInput"]);

            // inserting name
            //sort.Name = vm.algoDetails.AlgorithmName; // this didn't
            sort.Name = "test name"; // 8/3/2016 this turned out fine

            // adding the index values into a list
            for (int i = 1; i <= noOfInput; i++)
            {
                int val = Int32.Parse(Request.Form["indexValue_"] + i);

                //vm.sortAnimationData.IndexValues.Add(val);
                sort.IndexValues.Add(82);
            }

            //vm.sortAnimationData = sort;
            vm.algoNavBar = algorithmRepository.FindSameParadigmTypeAlgorithm(id).ToList();
            vm.algoDetails = algorithmRepository.FindThis(id).SingleOrDefault();

            return View(vm);
        }


        // TODO; 4/3/16
        [HttpPost]
        public ActionResult KnapsackAnimation(int id)
        {
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