const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://diego-sanchez:d093953420@prueba-db.ljuef.mongodb.net/Music?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const Schema = mongoose.Schema;

var cancionesSchema = new Schema({
    name: String,
    artist:String
});

var canciones = mongoose.model('Music', cancionesSchema, 'Songs');

const express = require("express");

const app = express();

app.use(express.json());

// GET Devuelve la lista de canciones
app.get("/", async(req, res)=>{
  var songs = await canciones.find();
  res.send(songs);
});

app.post("/", async(req, res)=>{
    var newSong = {
        name: req.body.name,
        artist: req.body.artist
    }
    var datos = new canciones(newSong);
    datos.save();
    res.redirect('/');
  });

app.delete("/", async(req, res)=>{
    var id = req.body.id;
    canciones.findByIdAndRemove(id).exec();
    res.redirect('/');
});

app.listen(5000);
console.log('Listen localhost:5000');