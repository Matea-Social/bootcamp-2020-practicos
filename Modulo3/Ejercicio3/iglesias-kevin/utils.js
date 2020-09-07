
let songsList = [];

const alistSongs = (req, res) => {
  if (songsList.length > 0) {
    res.json({
      canciones: songsList,
    });
  } else {
    res.status(404).send("No se encontraron canciones!");
  }
};

const filterSongByName = (req, res) => {
  const nombre = req.params.cancion;

  const resultado = songsList.filter((cancion) => {
    if (cancion.name === nombre) {
      return true;
    }

    return false;
  });

  res.send(resultado);
};


const cancionEsValida = (cancion) => {
  if (cancion.name && cancion.artist && cancion.duration) {
    return true;
  }
  return false;
};

const newSong = (req, res) => {
  const cancion = req.body;
  if (cancionEsValida(cancion)) {
    songsList.push(req.body);
    res.json(req.body);
  } else {
    res.status(400).send("El formato de la canción es incorrecto");
  }
};

const delateSongByName = (req, res) => {
  const nombre = req.params.cancion;

  const resultado = songsList.filter((cancion) => {
    if (cancion.name !== nombre) {
      return true;
    }

    return false;
  });

  songsList = resultado;

  res.send("Canción eliminada");
};

module.exports = {
  alistSongs,
  newSong,
  filterSongByName,
  delateSongByName,
};