                                        //CONTROLADOR

//Mongoose
const mongoose = require("mongoose");
//Modelo
const baseDeDatos = require('./server/baseDeDatos');

//funciones

//get
function listaCanciones(){
    let canciones = baseDeDatos.listaCancionesMateify();
}
//get
function cancionBuscada(){
    let cancionQueBusco = baseDeDatos.cancionQueBuscoMateify();
}

//post
function cancionAgregada() {
    let cancionQueAgrego = baseDeDatos.cancionQueAgregoMateify();
};
//delete
function cancionAeliminar() {
    let cancionQueElimino = baseDeDatos.cancionQueEliminoMateify();
};


//importacion de cada funcion
module.exports = {
     listaCanciones,
     cancionAgregada,
     cancionAeliminar,
     cancionBuscada
};
