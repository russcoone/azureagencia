var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    pagina: "Inicio",
  });
});

});
router.get("/servicios", function (req, res, next) {
  res.render("servicios", {
    pagina: "Servicio",
  });
});


router.get("/testimoniales", function (req, res, next) {
  res.render("testimoniales", {
    pagina: "Testimoniales",
  });
});

router.get("/viajes", function (req, res, next) {
  res.render("Viajes", {
    pagina: "viajes",
  });
});

module.exports = router;
