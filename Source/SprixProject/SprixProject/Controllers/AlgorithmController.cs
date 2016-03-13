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

        public ActionResult AnimationDummy(int id)
        {
            var formType = algorithmRepository.retrieveFormType(id);

            AnimationViewModel vm = new AnimationViewModel();
            vm.algoDetails = algorithmRepository.FindThis(id).SingleOrDefault();
            return View(vm);

        }

        public ActionResult AlgorithmDetails(int id)
        {
            var formType = algorithmRepository.retrieveFormType(id);
            AlgorithmViewModel vm = new AlgorithmViewModel();

            vm.algoDetails = algorithmRepository.FindThis(id).SingleOrDefault();
            vm.algoNavBar = algorithmRepository.FindSameParadigmTypeAlgorithm(id).ToList();

            return View(vm);
        }

        // 8/3/2016 TODO; Not submitting, does not return the content
        [HttpPost]
        public ActionResult AlgorithmDetails(String[] potato)
        {

            return Content("Submitted");
        }

    }
}