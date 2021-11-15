var Sequeliza = require("sequelize");

const db = new Sequeliza("postgres", "uajbpqbmld", "Y7RK13N0Z7027YP3$", {
  host: "agenciaazure-server.postgres.database.azure.com",
  port: "5432",
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
});

module.exports = db;
