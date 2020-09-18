var mongoose = require('mongoose');

//Create a moongose model
const schema = mongoose.Schema({name: String, artist: String, album: String});
const Songs = mongoose.model('Songs', schema, 'Songs');

const songList = async(req, res) => {
  var songs = await Songs.find({});
  if (songs.length > 0) {
    res.send({songs});
  } else {
    res
      .status(404)
      .send("No se encontraron canciones!");
  }
};

const findByName = async(req, res) => {
  var song = await Songs.find({name: req.params.cancion})
  if (song != '') {
    res.send({song});
  } else {
    res
      .status(404)
      .send("No se encontro la cancion!");
  }
};

// valida que el formato de la cancion sea valida
const cancionEsValida = (cancion) => {
  if (cancion.name && cancion.artist) {
    return true;
  }
  return false;
};
const updateSong = async(req, res) => {
  const songM = req.body;
  if (cancionEsValida(songM)) {
    
    //Validar si la modifico
    await Songs.findOneAndUpdate({name: req.params.cancion}, songM);
    res.send(songM)
  }
   else {
    res
      .status(400)
      .send("El formato de la canción es incorrecto");
  }
}

const addSong = async(req, res) => {
  var song = req.body;
  if (cancionEsValida(song)) {
    var Newsong = new Songs({name: song.name, artist: song.artist,album:song.album});
    Newsong.save();
    res.send("se agrego la cancion de forma correcta")
  } else {
    res
      .status(400)
      .send("El formato de la canción es incorrecto");
  }
};

const deleteByName = async(req, res) => {
  const name = req.params.cancion;
  await Songs.deleteOne({name: name});
  //@TODO validar si se elimino correctamente
  res.send("la cancion se elimino de forma correcta");
};

module.exports = {
  songList,
  addSong,
  findByName,
  deleteByName,
  updateSong
};
