                                      //CONTROLADOR

//Mongoose
const mongoose = require("mongoose");
//Modelo
const baseDeDatos = require('./basedeDatos');

//funciones
const devuelveTodo = async (req , res) => {
    var list = await song.find();
    res.send(list);
    console.log("get que devuelve toda mis canciones");
};



//importacion de cada funcion
module.exports = {
    devuelveTodo,
};