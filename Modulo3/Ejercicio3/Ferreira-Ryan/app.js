
const express = require('express');
const server = express();
server.use(express.json());

const songList = [];

server.get('/', (req, res) => {
    if(songList.length > 0) {
        res.send(songList);
    } else {
        res.status(404);
        res.send('Hubo un error');
    }
});

server.post('/', (req, res) => {
    var song = req.body;
    songList.push(song);
    res.status(201);
    res.send('Canción agregada correctamente.');
});

server.listen(4000);

console.log("http://localhost:4000");