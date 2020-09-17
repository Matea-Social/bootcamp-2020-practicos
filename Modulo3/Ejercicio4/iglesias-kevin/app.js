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


const alistSongList = async (req, res) => {
    const sFind = await songs.find()

    res.send(sFind);
}

const addSong = async (req, res) => {
    const sBody = req.body;
    const newSong = new Cancion(sBody);
    newSong.save(function (err) {
    if (err){
        res.status(404).send("Error: No se ha podido agregar la música");
        console.log(err);
    } else {
        res.status(201).send("Alerta: Se agregó la música");
        }
    })
    console.log(newSong); 
}

//Get
server.get("/", alistSongList);

//Post

server.post('/', addSong)


/* CONSOLE LOGS */
console.log("Conectado : " + server.listen);