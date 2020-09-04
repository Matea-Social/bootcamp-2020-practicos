const express = require("express");
const bodyParser = require('body-parser');

var server = express();
server.use(bodyParser.json());
const canciones = [];

server.route("/")
  .get((req, res) => {
    if(canciones.length > 0) {
      res.send(canciones)
    }
    res.status(404).send("No hay canciones");
  })
  .post((req, res) => {
    const cancion = req.body;
    canciones.push(cancion);
    res.send("Cancion agregada")
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
    const filtrarCancion = (cancion) => {
      if(cancion.name === name) {
        return true;
      }
      return false;
    }
    const cancionName = canciones.filter(filtrarCancion);
    const deleteSong = (cancion) => {
      if(cancion === cancionName) {
      }
    }
    canciones.filter(deleteSong)
    res.send("cancion eliminada")
  });

server.listen(4000);
