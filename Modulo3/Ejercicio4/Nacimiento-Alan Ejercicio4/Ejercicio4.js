const mongoose = require("mongoose");
const express = require("express");

const app = express();
const port = 4000;
app.use(express.json());


mongoose.connect(
  "mongod b+srv://Alan-matea:Matea2020@prueba-db.vrgps.mongodb.net/Mateify?retryWrites=true&w=majority",
  { userNewUrlParser: true }
);

const Schema = mongoose.Schema;

var cancionesSchema = new Schema({
  name: String,
  artist: String,
});

var canciones = mongoose.model("Mateify", cancionesSchema, "Canciones");



// GET Devuelve la lista de canciones
app.get("/", async (req, res) => {
  var songs = await canciones.find();
  console.log("pasa el find");
  res.status(200);
  res.send(songs);
});



// POST Crea nueva cancion
app.post("/", async (req, res) => {
    res.send(hola);
  
});

app.listen(port, () => {
  console.log("Example app listening at http://localhost:${port}");
});
