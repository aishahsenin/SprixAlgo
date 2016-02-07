using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SprixProject.Models;

namespace SprixProject.Controllers
{
    public class AnimationController : Controller
    {

        AlgorithmRepository algorithmRepository = new AlgorithmRepository();

        // GET: Animation
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult DivideAndConquer()
        {
            var algoType = algorithmRepository.FindParadigmTypeAlgorithm(2).ToList();
            ViewBag.Type = "DivideAndConquer";
            return View(algoType);
        }

        public ActionResult Greedy()
        {
            var algoType = algorithmRepository.FindParadigmTypeAlgorithm(1).ToList();
            ViewBag.Type = "Greedy";
            return View(algoType);
        }

        public ActionResult DynamicProgramming()
        {
            var algoType = algorithmRepository.FindParadigmTypeAlgorithm(3).ToList();
            ViewBag.Type = "Dynamic";
            return View(algoType);
        }

        // TODO; 
        //public ActionResult AnimationStart(int id)
        //{
        //    return View();
        //}

    }

}