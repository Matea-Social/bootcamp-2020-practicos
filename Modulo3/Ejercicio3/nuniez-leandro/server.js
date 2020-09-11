const express = require("express");
const bodyParser = require('body-parser');

var server = express();
server.use(bodyParser.json());
let canciones = [];

server.route("/")
  .get((req, res) => {
    if(canciones.length > 0) {
      res.send(canciones)
    }
    res.status(404).send("No hay canciones");
  })
  .post((req, res) => {
    const cancion = req.body;
    if(cancion.name && cancion.artist && cancion.duration) {
      canciones.push(cancion);
      res.send("Cancion agregada")
    } else {
      res.status(404).send("Formato incorrecto");
    }
  })

  
server.route("/:name")
  .get((req, res) => {
    const name = req.params.name;
    const filtrarCancion = (cancion) => {
      if(cancion.name === name) {
        return true;
      }
      return false;
    }
    const cancionName = canciones.filter(filtrarCancion);
    res.send(cancionName);
  })
  .delete((req, res) => {
    const name = req.params.name;
    const cancionBorrada = canciones.filter((cancion) => {
      if(cancion.name !== name) {
        return true;
      }
      return false;
    })
    canciones = cancionBorrada;
    res.send("Cancion eliminada");
  })
  .put((req, res) => {
    const name = req.params.name;
    const nuevaCancion = req.body;
    const cancionBorrada = canciones.filter((cancion) => {
      if(cancion.name !== name) {
        return true;
      }
      return false;
    })
    canciones = cancionBorrada;
    canciones.push(nuevaCancion);
    res.send("Cancion actualizada");
  })

server.listen(4000);
