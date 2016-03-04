using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SprixProject.Models;
using SprixProject.Models.Class;
using SprixProject.ViewModel;

namespace SprixProject.Controllers
{
    public class AlgorithmController : Controller
    {

        AlgorithmRepository algorithmRepository = new AlgorithmRepository();

        public ActionResult Index()
        {
            return View();
        }

        // THIS IS FOR TEST ONLY
        // ANIMATION DUMMY
        public ActionResult AnimationDummy(int id)
        {

            // retrieve form type
            var formType = algorithmRepository.retrieveFormType(id);

            // sort type
            if (formType == 1)
            {
                AnimationViewModel vm = new AnimationViewModel();
                SortAlgorithm sortAlgo = new SortAlgorithm();
                vm.dummyAnimation = sortAlgo.dummyData();
                vm.TypeId = 1;
                return View(vm);
            }
            // knapsack type
            // TODO; working on this
            else if (formType == 2)
            {
                AnimationViewModel vm = new AnimationViewModel();
                KnapsackAlgorithm knapsack = new KnapsackAlgorithm();
                vm.dummyKnapsackAnimation = knapsack.dummyFractionalKnapsack();
                vm.TypeId = 2;
                return View(vm);
            }
            else
            {
                return View();
            }

        }

        public ActionResult AlgorithmDetails(int id)
        {
            var formType = algorithmRepository.retrieveFormType(id);
            AlgorithmViewModel vm = new AlgorithmViewModel();

            // retrieves information of the algorithm selected
            vm.algoDetails = algorithmRepository.FindThis(id).SingleOrDefault();

            // retrieves data for the navigational bar
            vm.algoNavBar = algorithmRepository.FindSameParadigmTypeAlgorithm(id).ToList();

            return View(vm);
        }

        // TODO; Not submitting, does not return the content
        [HttpPost]
        public ActionResult AlgorithmDetails(String[] potato)
        {

            return Content("Submitted");
        }

    }
}