const express = require('express');

const manejador = require('./manejador');

const server = express();
const port = 3000;

server.use(express.json());

server.get('/', manejador.listarCanciones);

server.get('/:cancion', manejador.obtenerCancionPorNombre);

server.post('/', manejador.nuevaCancion);

server.delete('/:cancion', manejador.eliminarCancionPorNombre);

server.put('/:cancion', (req, res) => {
    res.send('implementar PUT');
});

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});