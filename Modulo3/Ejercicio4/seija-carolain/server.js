//MONGOOSE
const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect(
  "mongodb+srv://carolain-seija:crosiljs1@cluster0.dk3mk.mongodb.net/canciones?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

//ESQUEMA
const songSchema = new Schema({
  name: String,
  artist: String,
});

//MODELO
// primer valor: base de datos
// segundo valor: schema
//tercer valor: valor dentro de la base de datos "coleccion"
var song = mongoose.model("canciones", songSchema, "mateify");

//EXPRESS
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  var list = await song.find();
  res.send(list);
  console.log("get que devuelve toda mis canciones");
});

app.get("/:name", function (req, res) {
  song.find({ resul: req.query.name }, function (err, data) {
    if (data) {
      res.send(data);
    } else {
      res.send(err);
    }
    console.log("buscando una cancion ");
  });
});

app.post("/", async (req, res) => {
  var newSong = {
    name: req.body.name,
    artist: req.body.artist,
  };
  var datos = new song(newSong);
  datos.save();
  res.redirect("/");
  console.log("post agrega cancion");
});

app.delete("/", async (req, res) => {
  var id = req.body.id;
  song.findByIdAndRemove(id).exec();
  res.redirect("/");
  console.log("delete que elimina la cancion");
});

app.put("/replace"),function(req, res) {
  song.replaceOne(
    { name: "Clara" },
    { name: "Johnny Boy", age: 2, breed: "Labrador" },
    function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
};

app.listen(3000);
console.log("http://localhost:3000");
