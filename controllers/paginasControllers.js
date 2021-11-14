var Viaje = require("../models/Viaje.js");
var Testimonial = require("../models/Testimoniales.js");

const paginaInicio = async function (req, res, next) {
  //consultar 3 viajes del modelo viaje

  const promiseDB = [];
  promiseDB.push(Viaje.findAll({ limit: 3 }));
  promiseDB.push(Testimonial.findAll({ limit: 3 }));

  try {
    const resultado = await Promise.all(promiseDB);

    res.render("index", {
      pagina: "Inicio",
      clase: "home",
      viajes: resultado[0],
      testimoniales: resultado[1],
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaContacto = function (req, res, next) {
  res.render("contacto", {
    pagina: "Contacto",
  });
};

const paginaServicios = function (req, res, next) {
  res.render("servicios", {
    pagina: "Servicio",
  });
};

const paginaNosotros = function (req, res, next) {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};

const paginaTestimoniales = async function (req, res, next) {
  try {
    const testimoniales = await Testimonial.findAll();
    res.render("testimoniales", {
      pagina: "Testimoniales",
      testimoniales,
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaViajes = async function (req, res, next) {
  //consultar base de datos

  const viajes = await Viaje.findAll();

  res.render("viajes", {
    pagina: "Viajes",
    viajes: viajes,
  });
};

//muestra un viaje por su slug
const paginaDetalleviaje = async (req, res) => {
  const { slug } = req.params;
  try {
    const viaje = await Viaje.findOne({ where: { slug } });
    res.render("viaje", {
      pagina: "Informacion Viaje",
      viaje,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  paginaInicio,
  paginaContacto,
  paginaServicios,
  paginaNosotros,
  paginaTestimoniales,
  paginaViajes,
  paginaDetalleviaje,
};
