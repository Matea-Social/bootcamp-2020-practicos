const express = require("express");

const manejador = require("./manejador");

const app = express();
const port = 3000;

app.use(express.json());

// GET Devuelve la lista de canciones
app.get("/", manejador.listarCanciones);

// GET /:cancion Devuelve una sola cancion
app.get("/:cancion", manejador.obtenerCancionPorNombre);

// POST Crea nueva cancion
app.post("/", manejador.nuevaCancion);

// DELETE /:cancion Elimina una cancion
app.delete("/:cancion", manejador.eliminarCancionPorNombre);

// PUT Modifica una canción
app.put("/:cancion", manejador.actualizarCancion);

app.listen(port);
