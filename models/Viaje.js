var Sequelize = require("sequelize");
var db = require("../config/db.js");

const Viaje = db.define("viaje", {
  titulo: {
    type: Sequelize.STRING,
  },
  precio: {
    type: Sequelize.STRING,
  },
  fecha_ida: {
    type: Sequelize.STRING,
  },
  fecha_vuelta: {
    type: Sequelize.STRING,
  },
  imagen: {
    type: Sequelize.STRING,
  },
  descripcion: {
    type: Sequelize.STRING,
  },
  disponibles: {
    type: Sequelize.STRING,
  },
  slug: {
    type: Sequelize.STRING,
  },
});

module.exports = Viaje;
