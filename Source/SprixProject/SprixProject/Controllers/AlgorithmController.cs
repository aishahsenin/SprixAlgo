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
                KnapViewModel vm = new KnapViewModel();
                KnapsackAlgorithm knapsack = new KnapsackAlgorithm();
                vm.knapsackDummyData = knapsack.dummyFractionalKnapsack();
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

            AlgorithmViewModel vm = new AlgorithmViewModel();
            var formType = algorithmRepository.retrieveFormType(id);

            if (formType == 1) // sort
            {
                
                SortAlgorithm sortAlgo = new SortAlgorithm();
                Input inputForm = new Input();

                vm.algoNavBar = algorithmRepository.FindSameParadigmTypeAlgorithm(id).ToList();
                vm.algoDetails = algorithmRepository.FindThis(id).SingleOrDefault();
                vm.sortDetails = sortAlgo.dummyData();
                vm.formType = sortAlgo.GetFormType();
                vm.form = inputForm.GetSortInputForm(); // showing sort input form TODO; needs to be dynamic

                if (vm.algoNavBar == null || vm.algoDetails == null)
                    return View("Not found");
                else
                    return View(vm);  
            }
            else if (formType == 2) // knapsack
            {
                KnapsackAlgorithm knapsack = new KnapsackAlgorithm();
                vm.knapsackDummyData = knapsack.dummyFractionalKnapsack();

                return View(vm);
            }
            else
            {
                return View(); // TODO: return not found
            }

        }

        public ActionResult PartialAlgorithmDetails(AlgorithmViewModel vm)
        {
            return PartialView(vm);
        }


        // TODO; Not submitting, does not return the content
        [HttpPost]
        public ActionResult AlgorithmDetails(String[] potato)
        {

            //Input input = new Input();
            //input.NoOfIndex = vm.form.NoOfIndex;
            
            // TODO; add into list


            // 1 - create a new object
            // 2 - return the object into a new view
            return Content("Submitted");
        }

        // TEST ANIMATION


    }
}