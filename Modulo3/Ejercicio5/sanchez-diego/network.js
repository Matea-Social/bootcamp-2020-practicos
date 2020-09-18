const express = require("express");
const controller = require('controller.js');
const app = express();
app.use(express.json());

// GET Devuelve la lista de canciones
app.get("/", function(req, res){
  try {
    var canciones = controller.getSong({});
    res.status(200);
    res.send(canciones);
  } catch (e) {
    res.status(500);
    res.send('Error al Buscar canciones');
  }
  });

// GET Devuelve la cancion con ese Nombre
app.get("/:name", function(req, res){
  try {
    var canciones = controller.getSongByName(req.params.name);
    res.status(200);
    res.send(canciones);
  } catch (e) {
    res.status(500);
    res.send('Error, No se ha encontrado la cancion!');
  }
  });

app.listen(5000)
console.log('Listen in localhost:5000');