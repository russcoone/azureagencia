var Sequelize = require("sequelize");
var db = require("../config/db.js");

const Testimonial = db.define("testimoniales", {
  nombre: {
    type: Sequelize.STRING,
  },
  correo: {
    type: Sequelize.STRING,
  },
  mensaje: {
    type: Sequelize.STRING,
  },
});

module.exports = Testimonial;
