var Sequeliza = require("sequelize");
require("dotenv").config({ path: "variables.env" });

const db = new Sequeliza(
  process.env.BD_NOMBRE,
  process.env.BD_USER,
  process.env.BD_PASS,
  {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: "postgres",
    define: {
      timestamps: false,
      underscored: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },

    dialectOptions: {
      ssl: true,
      rejectUnauthorized: "false",
    },

    operatorAliases: false,
  }
);

module.exports = db;
