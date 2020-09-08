const express = require('express');
var server = express();
const utils = require("./utils");
server.use(express.json());

/// GET para deolver todas las canciones
server.get("/", utils.alistSongs);

// GET /:songName me devuelve el nombre de una sola cancion
server.get("/:songName", utils.filterSongByName);

// POST Crea nueva cancion
server.post("/", utils.newSong);

// DELETE /:songName me borra una cancion
server.delete("/:songName", utils.delateSongByName);

// PUT Modifica una canción
server.put("/:songName", utils.modifySong);

server.listen(4100);
console.log(server.listen);