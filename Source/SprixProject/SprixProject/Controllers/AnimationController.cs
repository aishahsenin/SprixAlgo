using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SprixProject.Controllers
{
    public class AnimationController : Controller
    {
        // GET: Animation
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult DivideAndConquer()
        {
            ViewBag.Type = "DivideAndConquer";
            return View();
        }

        public ActionResult Greedy()
        {
            ViewBag.Type = "Greedy";
            return View();
        }

        public ActionResult DynamicProgramming()
        {
            ViewBag.Type = "Dynamic";
            return View();
        }

    }
}