const express = require("express");
const controller = require("./controller");

const app = express();
const port = 3000;

app.use(express.json());

// GET Devuelve la lista de canciones
app.get("/", controller.listarCanciones);

// GET /:cancion Devuelve una sola cancion
app.get("/:cancion", controller.obtenerCancionPorNombre);

// POST Crea nueva cancion
app.post("/", controller.nuevaCancion);

// DELETE /:cancion Elimina una cancion
app.delete("/:cancion", controller.eliminarCancionPorNombre);

// PUT Modifica una canción
app.put("/:cancion", controller.modificoCancion);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
