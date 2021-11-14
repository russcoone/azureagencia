var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var db = require("./config/db.js");

require("dotenv").config({ path: "variables.env" });

var index = require("./routes/index");

var app = express();

// conectar la base de datos
// db.authenticate()
//   .then(() => console.log("Base de datos conectada"))
//   .catch((error) => console.log(error));

// db.authenticate()
//   .then(() => {
//     console.log("bade de datos conectada");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

db.authenticate()
  .then(function () {
    console.log("Base de datos conectada");
  })
  .catch(function (error) {
    console.log(error);
  });

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// obtener el año actual

app.use(function (req, res, next) {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombresitio = "Agencia de Viajes";

  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
