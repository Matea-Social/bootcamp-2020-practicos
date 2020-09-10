const express = require('express');
const manager = require('./manager');
var server = express();
server.use(express.json());
server.listen(3000);

server.route('/')
  .get(manager.listarCanciones)

  .post(manager.agregarCancion)

server.route('/:name')
  .get(manager.obtenerCancionPorNombre)

  .put(manager.modificarCancion)

  .delete(manager.eliminarCancion)