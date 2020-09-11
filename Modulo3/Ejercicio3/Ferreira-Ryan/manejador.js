const { json } = require("body-parser");

let songList = [];

const songsList = (req, res) => {
    if(songList.length > 0) {
        res.json({
            songs: songList,
        });
    } else {
        res.status(404).send('Tú playlist esta vacía.');
    }
};

const handleCorrectSong = (song) => {
    if (song.name && song.artist && song.duration) {
        return true;
    } 
    return false;
};

const songForName = (req, res) => {
    let name = req.params.song;

    const result = songList.filter((song) =>{
        if(song.name === name){
            return true;
        }
        return false;
    });

    res.send(result);
};

const deleteSongForName = (req, res) => {
    let name = req.params.song;

    const result = songList.filter((song) =>{
        if(song.name !== name){
            return true;
        }
        return false;
    });

    songList = result;

    res.status(200).send('Canción eliminada correctamente.');
};

const newSong = (req, res) => {
    var song = req.body;
    if(handleCorrectSong(song)){
        songList.push(req.body);
        res.json(req.body);
        res.status(200).send('Canción agregada correctamente.');
    } else {
        res.status(404).send('Formato de la canción inválido.');
    }
};

const changeSong = (req, res) => {
    const name = req.params.name;
    const modifiedSong = req.body;
    if (handleCorrectSong(modifiedSong)) {
      const result = songList.findIndex(c => c.name === name);
      if(!result){
        res.status(400).send("Ocurrio un error al modificar la canción");
      }
      songList[result] = modifiedSong
      res.status(200).send("La cancion se modifico correctamente");
      res.json(modifiedSong);
    } else {
      res.status(400).send("El formato de la canción es incorrecto");
    }
};

module.exports = {
    songsList,
    newSong,
    songForName,
    deleteSongForName,
    changeSong,
};