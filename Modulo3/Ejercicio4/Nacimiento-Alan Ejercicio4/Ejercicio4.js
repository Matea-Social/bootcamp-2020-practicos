const mongoose = require("mongoose");
const express = require("express");

const app = express();
const port = 4000;
app.use(express.json());

mongoose.connect(
  "mongodb+srv://Alan-matea:Matea2020@prueba-db.vrgps.mongodb.net/Mateify?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

const Schema = mongoose.Schema;

let cancionesSchema = new Schema({
  name: { type: String, required: true },
  artist: { type: String }
});

let canciones = mongoose.model('Mateify', cancionesSchema, 'Canciones');

// GET Devuelve la lista de canciones
app.get("/", async(req, res) => {
  const songs = await canciones.find();
  res.send(songs);
});

// POST Crea nueva cancion
app.post("/", async (req, res) => {
  const nuevaCancion = req.body;
  console.log(nuevaCancion);
  const addCancion = new canciones(nuevaCancion);
  addCancion.save(function(err) {
    if(err){
      res.status(404).send("No se pudo agregar, hubo un error");
      console.log(err);
    }else{
      res.status(201).send("Se agregó una cancion");
    }
  })
});

app.get("/:name", async(req, res) => {
  const name = req.params.name;
  const cancion =  await canciones.find({name: name})
  res.send(cancion);
})

app.delete("/:name", async(req, res) => {
  const name = req.params.name;
  const cancion =  await canciones.find({name: name})
  res.send(cancion);
})

app.put("/:name", async(req, res) => {
  const name = req.params.name;
  const cancion =  await canciones.find({name: name})
  res.send(cancion);
})

app.listen(port, () => {
  console.log("Example app listening at http://localhost:${port}");
});
