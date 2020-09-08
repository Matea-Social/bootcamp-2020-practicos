
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
  const name = req.params.cancion;

  const result = songsList.filter((cancion) => {
    if (cancion.name === name) {
      return true;
    }

    return false;
  });

  res.send(result);
};


const songIsValid = (song) => {
  if (song.name && song.artist && song.duration) {
    return true;
  }
  return false;
};

const newSong = (req, res) => {
  const song = req.body;
  if (songIsValid(song)) {
    songsList.push(req.body);
    res.json(req.body);
  } else {
    res.status(400).send("Formato de canción inválido");
  }
};

const modifySong = (req, res) => {
  const song = req.body;
  if (songIsValid(song)) {
    const songFilter = filterSongByName;
    /* .pop para borrar el ultimo elemento del array */
    songsList.pop(songFilter);
    songFilter.artist = song.artist;
    songFilter.duration = song.duration;
    songsList.push(song);
    res.json(req.body);
  } else {
    res.status(400).send("Formato de canción inválido");
  }
};



const delateSongByName = (req, res) => {
  const name = req.params.cancion;

  const result = songsList.filter((cancion) => {
    if (cancion.name !== name) {
      return true;
    }

    return false;
  });

  songsList = result;

  res.send("Canción eliminada");
};

const changeSong = (req, res) => {
  console.log("Hola");
  
};

module.exports = {
  alistSongs,
  newSong,
  filterSongByName,
  delateSongByName,
  modifySong
};