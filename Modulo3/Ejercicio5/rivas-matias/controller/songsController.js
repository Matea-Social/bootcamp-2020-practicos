const importModel = require('../model/songsModel');
var songs = importModel.songs;

const validateSong = (song) => {
    if(song.name && song.album){
        return true;
    }
    return false;
}

const listSongs = async(req, res) => {
    var getSongs = await songs.find({})
    if(getSongs.length > 0){
        res.send(getSongs)
    } else {
        res.status(404).send("No se encontraron canciones!");
    }
}

const addSong = (req, res) => {
    const newSong = new songs(req.body);

    if(validateSong(newSong) == true){
        newSong.save(function(err){
            if(err){
                res.status(400).send("El formato de la canción es incorrecto")
            } else {
                res.status(201)
                res.send("La canción se agregó correctamente")
            }
        })
    }
}

const getSongByName = async(req, res) => {
    var nombre = req.params.name;
    var getSongs = await songs.find({});
    const resultado = getSongs.filter((element) => {
        if (element.name === nombre) {
            return true;
        }
            return false;
    })
    res.send(resultado);
}

/* 
ahora sé que debería usar .save la mayoría de las veces, 
pero decidí probar findOneAndUpdate solo para probar
y ahora me puse a hacerlo bien por una hora y media
solo para tener un ejemplo bien hecho
*/

const modifySong = (req, res) => {
    var name = req.params.name;
    var newSong = req.body;
    songs.findOneAndUpdate({name: name}, {name: newSong.name, album: newSong.album}, {new: true}, (error, data) => {
        if(error){
            res.send('error');
        } else {
            res.send(data);
        }
    })
}

const eliminateSong = (req, res) => {
    var name = req.params.name;
    songs.findOneAndDelete(name, (error, deletedRecord) => {
        if(!error){
            console.log(deletedRecord);
            res.send(deletedRecord);
        }
    })
}

module.exports = {
    listSongs,
    addSong,
    getSongByName,
    modifySong,
    eliminateSong
}