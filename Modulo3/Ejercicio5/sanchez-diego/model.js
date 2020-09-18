const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://diego-sanchez:d093953420@prueba-db.ljuef.mongodb.net/Music?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const Schema = mongoose.Schema;

// Declaracion del Schema
var cancionesSchema = new Schema({
    name: String,
    artist:String
});
/* 
  Model:
  1-Base de datos
  2-Schema
  3-Coleccion de la bace de datos
*/
var canciones = mongoose.model('Music', cancionesSchema, 'Songs');

// Obtiene todas las songs
async function fetAllSongs(){
    return await canciones.find();
}

// Obtiene la song por su nombre
async function getSongByName(nombre){
    return await canciones.find({name: nombre})
}

// Agrega la song a la DB
async function addSong(song){
     
}