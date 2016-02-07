using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SprixProject.Models;

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
            var algo = algorithmRepository.FindThis(id);
            // Algorithm algo = algorithmRepository.GetAlgorithm(id);
            return View("AlgorithmDetails", algo.SingleOrDefault());
        }

        // TODO; not retrieving as expected
        //public ActionResult AlgorithmDetails(int id)
        //{
        //    //var algoDetails = algorithmRepository.FindSpecificAlgorithm(id).ToList();
        //    Algorithm algo = algorithmRepository.GetAlgorithm(id);
        //    return View("AlgorithmDetails", algo);
        //}
    }
}