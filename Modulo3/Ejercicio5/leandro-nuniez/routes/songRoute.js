const express = require("express");
const controller = require("../controllers/songController")

var app = express();
app.use(express.json());

app.route("/")
  .get(async(req, res) => {
    try{
      const canciones = await controller.listarCanciones();
      if(canciones.length > 0) {
        res.send(canciones)
      }
      res.status(404).send("No hay canciones");
    } catch(e) {
      throw e;
    }
  })
  .post(async(req, res) => {
    try {
      const cancionBody = req.body;
      const nuevaCancion = await controller.agregarCancion(cancionBody);
      if(nuevaCancion) {
        res.status(404).send("No se pudo agregar la cancion");
      } else {
        res.status(201).send("Se agregó la cancion");
        console.log(nuevaCancion);
      }
    } catch(e) {
      throw e;
    }
  })
app.route("/:name")
  .get(async(req, res) => {
    try {
      const name = req.params.name;
      const cancion = await controller.buscarCancion(name);
      res.send(cancion);
    } catch (e) {
      throw e;
    }
  })
  .delete(async(req, res) => {
    try {
      const name = req.params.name;
      controller.eliminarCancion(name);
      res.send("Cancion eliminada");
    } catch (e) {
      throw e;
    }
  })
  .put(async(req, res) => {
    try {
      const name = req.params.name;
      const cancionBody = req.body;
      const cancionActualizada = await controller.actualizarCancion(name, cancionBody);
      if (cancionActualizada){
        res.status(404).send("No se pudo actualizar la cancion");
      } else {
        res.status(201).send("Se actualizó la cancion");
      }
    } catch (e) {
      throw e;
    }
  })

app.listen(4000);
