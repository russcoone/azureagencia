var express = require("express");
var {
  guardarTestimonial,
} = require("../controllers/testimonialControllers.js");

var {
  paginaInicio,
  paginaContacto,
  paginaServicios,
  paginaNosotros,
  paginaTestimoniales,
  paginaViajes,
  paginaDetalleviaje,
} = require("../controllers/paginasControllers.js");

var router = express.Router();

/* GET home page. */
router.get("/", paginaInicio);

router.get("/contacto", paginaContacto);

router.get("/servicios", paginaServicios);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);
router.get("/viajes/:slug", paginaDetalleviaje);

router.get("/testimoniales", paginaTestimoniales);
router.post("/testimoniales", guardarTestimonial);

module.exports = router;
