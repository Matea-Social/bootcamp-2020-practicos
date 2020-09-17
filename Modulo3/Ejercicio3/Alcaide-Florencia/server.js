const canciones= [];

const express = require('express');
const manejador = require("./manejador");

var server = express();
server.use(express.json());

// GET Devuelve la lista de canciones
server.get("/", manejador.listarCanciones);

// GET /:cancion Devuelve una sola cancion
server.get("/:cancion", manejador.obtenerCancionPorNombre);


// POST Crea nueva cancion
server.post("/", manejador.nuevaCancion);


// DELETE /:cancion Elimina una cancion
server.delete("/:cancion", manejador.eliminarCancionPorNombre);

// PUT Modifica una canción
server.put("/:cancion",manejador.modificarCancion);


server.listen(3000);