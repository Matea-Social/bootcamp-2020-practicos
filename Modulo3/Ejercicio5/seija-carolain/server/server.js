                                           //EXPRESS

//importaciones de Express
const express = require("express");
const app = express();
const app = express();
app.use(express.json());

//Importacion del controlador
const controlador = require('./controlador');
//MongoDB, mongoose
const mongoose = require('mongoose');
app.get("/", controlador.devuelveTodo);


//Conección mongoDB
mongoose.connect(
    "mongodb+srv://carolain-seija:crosiljs1@cluster0.dk3mk.mongodb.net/canciones?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );

//puerto del local host:
app.listen(3000);
console.log("http://localhost:3000");