const express = require("express");
const mongoose = require("./mongoDB/config/connect");
let Cancion = require("./mongoDB/schema/cancion");

var app = express();
app.use(express.json())   

app.route("/")
  .get(async (req, res) => {
    const canciones = await Cancion.find();
    if(canciones.length > 0) {
      res.send(canciones)
    }
    res.status(404).send("No hay canciones");
  })
  .post((req, res) => {
    const cancionBody = req.body;
    const nuevaCancion = new Cancion(cancionBody);
    nuevaCancion.save(function (err) {
      if (err){
        res.status(404).send("No se pudo agregar la cancion");
        console.log(err);
      } else {
        res.status(201).send("Se agregó la cancion");
      }
    })
    console.log(nuevaCancion); 
  });

app.route("/:name")
  .get(async(req, res) => {
    const name = req.params.name;
    const cancionName = await Cancion.find({name: name});
    res.send(cancionName);
  })
  .delete(async(req, res) => {
    const name = req.params.name;
    const cancionBorrada = await Cancion.findOneAndDelete({name: name});
    Cancion = cancionBorrada;
    res.status(201).send("Cancion eliminada");
  })
  .put(async(req, res) => {
    const name = req.params.name;
    const cancionBody = req.body;
    const cancionUpdate = await Cancion.findOneAndUpdate({name: name}, cancionBody);
    cancionUpdate.save(function (err) {
      if (err){
        res.status(404).send("No se pudo actualizar la cancion");
        console.log(err);
      } else {
        res.status(201).send("Se actualizó la cancion");
      }
    })
  })

app.listen(5000);
