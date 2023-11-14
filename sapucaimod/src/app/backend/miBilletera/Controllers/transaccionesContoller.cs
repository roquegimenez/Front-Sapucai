using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace miBilletera.Controllers
{
    [Route("api/[controller]")]
    public class transaccionesControllers : Controller
    {
        private readonly ILogger<transaccionesControllers> _logger;

        public transaccionesControllers(ILogger<transaccionesControllers> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
    }
}
        /*
        public IActionResult Index()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }
    }
}
*/