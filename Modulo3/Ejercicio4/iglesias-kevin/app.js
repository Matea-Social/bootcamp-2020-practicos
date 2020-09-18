/* REQUIRES */
const mongoose = require('mongoose');
const { func } = require('prop-types');
const { Schema } =  mongoose;

/* EXPRESS INIT */

const express = require('express');
var server = express();
server.use(express.json());
server.listen(4100);

/* MONGO DB CONNECT */

const db = 'mongodb+srv://kevin:123asd@cluster0.vahxu.azure.mongodb.net/canciones?retryWrites=true&w=majority'
mongoose
    .connect(db, { 
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log("Un error ha surgido:" + err));



/* SCHEMA */

const songsSchema = new Schema({
    name: {type: String, required: true},
    album: String,
    duration: Number,
    artist: Object,
}, {collection: "CancionesCollections"})


let songs = mongoose.model('Canciones', songsSchema);


/* FUNCTIONS */

const songIsValid = (song) => {
    if (song.name && song.artist && song.duration) {
      return true;
    }
    return false;
  };

const alistSongList = async (req, res) => {
    const sFind = await songs.find()

    res.send(sFind);
}

const alistSongByName = async (req,res) => {
    const songName = req.params.songname
    const result = await songs.find({name : songName})

    if (result.length > 0) {
        res.status(200).send(result);
    }else{
        res.status(400).send("No se ha encontrado esa canción, verifica los datos!")
    }

}

//Get

server.get("/", alistSongList);


server.get("/:songname", alistSongByName)

/* Debug */

/* CONSOLE LOGS */
console.log("Conectado : " + server.listen);
