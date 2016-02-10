﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SprixProject.Models;
using SprixProject.ViewModel;

namespace SprixProject.Controllers
{
    public class AlgorithmController : Controller
    {

        AlgorithmRepository algorithmRepository = new AlgorithmRepository();

        // GET: Algorithm
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AlgorithmDetails(int id)
        {
            AlgorithmViewModel vm = new AlgorithmViewModel();
            vm.algoNavBar = algorithmRepository.FindSameParadigmTypeAlgorithm(id).ToList();
            vm.algoDetails = algorithmRepository.FindThis(id).SingleOrDefault();

            if (vm.algoNavBar == null || vm.algoDetails == null)
                return View("Not found");
            else
                return View(vm);
        }

        public ActionResult PartialAlgorithmDetails(int id)
        {
            // TODO; retrieve the right form

            AlgorithmViewModel vm = new AlgorithmViewModel();
            vm.algoNavBar = algorithmRepository.FindSameParadigmTypeAlgorithm(id).ToList();
            vm.algoDetails = algorithmRepository.FindThis(id).SingleOrDefault();
            // TODO; add algoSortForm

            if (vm.algoNavBar == null || vm.algoDetails == null)
                return View("Not found");
            else
                return PartialView("AlgorithmDetails", vm);

        }

    }
}