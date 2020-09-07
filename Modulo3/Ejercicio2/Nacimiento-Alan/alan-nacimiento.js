const express = require("express");

var server = express();

server.get("/", function (req, res) {
  res.json({
    nombre: "Alan",
    apodo: "Alan",
    sobremi: "Hola soy Alan vivo en Uruguay, Montevideo.",
    cumple: "21 de Julio",
  });
});

server.get("/nombre", function (req, res) {
  res.send("Hola soy Alan!!!");
});

server.get("/apodo", function (req, res) {
  res.send("Hola soy Alan!!!");
});

server.get("/sobremi", function (req, res) {
  res.send("Hola soy Alan vivo en Uruguay, Montevideo.");
});

server.get("/cumple", function (req, res) {
  res.send("21 de Julio!!!");
});

server.post("/", function (req, res) {
  res.send("Esto es un POST");
});

server.post("/", function (req, res) {
  res.send("Esto es un PUT");
});

server.listen(3000);
