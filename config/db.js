var Sequeliza = require("sequelize");
require("dotenv").config({ path: "variables.env" });

const db = new Sequeliza(
  process.env.DBNAME,
  process.env.DBUSER,
  process.env.DBPASS,
  {
    host: process.env.DBHOST,
    port: process.env.DBPORT,
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
