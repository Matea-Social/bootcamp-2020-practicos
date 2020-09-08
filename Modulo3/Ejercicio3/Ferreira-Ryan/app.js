const express = require('express');
const manejador = require('./manejador');
const server = express();

server.use(express.json());

server.get('/', manejador.songsList);

// GET/NOMBRE 
server.get('/:song', manejador.songForName);

// POST ADD SOGN
server.post('/', manejador.newSong);

// DELETE
server.delete('/:song', manejador.deleteSongForName);

// PUT
server.put('/:name', manejador.changeSong);

server.listen(4000);

console.log('im working');
