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

        public ActionResult AlgorithmDetails(int id)
        {
            AlgorithmViewModel vm = new AlgorithmViewModel();
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

        public ActionResult PartialAlgorithmDetails(AlgorithmViewModel vm)
        {
            return PartialView(vm);
        }

        [HttpPost]
        public ActionResult AlgorithmDetails(Input input)
        {
            return Content("Submitted");
        }


    }
}