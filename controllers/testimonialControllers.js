var Testimonial = require("../models/Testimoniales.js");

const guardarTestimonial = async (req, res) => {
  //validar

  const { nombre, correo, mensaje } = req.body;

  const errores = [];

  if (nombre.trim() === "") {
    errores.push({ mensaje: "Nombre esta vacio" });
  }
  if (correo.trim() === "") {
    errores.push({ mensaje: "Correo esta vacio" });
  }
  if (mensaje.trim() === "") {
    errores.push({ mensaje: "Mensaje esta vacio" });
  }

  if (errores.length > 0) {
    // consultar Testimoniales Existentes
    const testimoniales = Testimonial.findAll();

    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
      testimoniales,
    });
  } else {
    // almacen en la base de datos
    try {
      await Testimonial.create({
        nombre,
        correo,
        mensaje,
      });
      res.redirect("/testimoniales");
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = {
  guardarTestimonial,
};
