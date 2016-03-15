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

            List<int> indexValueList = new List<int>();

            for (int i = 1; i <= noOfInput; i++)
            {
                var valTest = Request.Form["indexValue_"] + i;
                int val = Int32.Parse(Request.Form["indexValue_"] + i); // ERROR; bug here. wrong value inserted
                indexValueList.Add(val);
            }

            sort.IndexValues = indexValueList;

            vm.sortAnimationData = sort;
            vm.algoNavBar = algorithmRepository.FindSameParadigmTypeAlgorithm(id).ToList();
            vm.algoDetails = algorithmRepository.FindThis(id).SingleOrDefault();

            return View(vm);
        }

        [HttpPost]
        public ActionResult KnapsackAnimation(int id)
        {
            AnimationViewModel vm = new AnimationViewModel();
            KnapsackAlgorithm knapsack = new KnapsackAlgorithm();

            int noOfInput = Int32.Parse(Request.Form["noOfKnapsackInput"]);

            List<int> itemWeightList = new List<int>();

            for (int i = 1; i <= noOfInput; i++)
            {
                int val = Int32.Parse(Request.Form["itemWeight_" + i]); 
                itemWeightList.Add(val);
            }

            knapsack.Capacity = Int32.Parse(Request.Form["capacityValue"]);
            knapsack.Items = itemWeightList;

            vm.knapsackAnimationData = knapsack;
            vm.algoNavBar = algorithmRepository.FindSameParadigmTypeAlgorithm(id).ToList();
            vm.algoDetails = algorithmRepository.FindThis(id).SingleOrDefault(); 

            return View(vm);
        }

        public ActionResult AnimationDummy(int id)
        {
            var formType = algorithmRepository.retrieveFormType(id);

            AnimationViewModel vm = new AnimationViewModel();
            vm.algoDetails = algorithmRepository.FindThis(id).SingleOrDefault();
            return View(vm);

        }
    }

}