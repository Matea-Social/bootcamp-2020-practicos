                                          //MONGOOSE

//Mongoose
const mongoose = require("mongoose");
const { Schema } = mongoose;


//ESQUEMA
const songSchema = new Schema({
  name: String,
  artist: String,
});

//MODELO
// primer valor: base de datos
// segundo valor: schema
//tercer valor: valor dentro de la base de datos "coleccion"
var song = mongoose.model("canciones", songSchema, "mateify");

module.exports = mongoose.model("canciones", songSchema, "mateify");;