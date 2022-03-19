using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TodoList.Models;

namespace TodoList.Controllers
{
    public class TodoController : Controller
    {
        public ActionResult TodoView()
        {
            List<Gorev> grv = new List<Gorev>
            {
                new Gorev
                {
                GorevKategori= "Sınav",
                GorevIcerigi = "Ders çalış",

                },
                new Gorev
                {
                GorevKategori = "Kodlama",
                GorevIcerigi = "Projeyi bitir",
                },

            };

            return View(grv);
        }
    }
}