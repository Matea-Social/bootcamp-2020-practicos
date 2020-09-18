const mongoose = require('mongoose');
const model = require('model.js');

// Obtener todas las songs y song por nombre
function getSongs(nombreCancion){
    return mongoose.model.getAllSongs();
    return mongoose.model.getSongByName(nombreCancion);
}

// Agregar nueva cancion a la base de datos
function addSong(song){
  validarSong(song);
  mongoose.model.addSong(song);
}

function validarSong(song){
  try {
    if(song == true){
      return song;
    }else{}
  } catch (e) {
    res.status(404);
    res.send('Eror, No se ha encontrado el archivo');
    
  }
}

module.exports ={
  getSongs,
  addSong
};