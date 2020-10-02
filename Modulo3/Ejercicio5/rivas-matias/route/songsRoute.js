const express = require("../node_modules/express");
const songsController = require('../controller/songsController');
var server = express();
server.use(express.json());
server.listen(3000);


server.route('/')
    .get(songsController.listSongs)

    .post(songsController.addSong)

server.route('/:name')
    .get(songsController.getSongByName)

    .put(songsController.modifySong)

    .delete(songsController.eliminateSong) 