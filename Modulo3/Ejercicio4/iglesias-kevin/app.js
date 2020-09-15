const mongoose = require('mongoose');
const { func } = require('prop-types');

const { Schema } =  mongoose;

/* EXPRESS */
const express = require('express');
var server = express();
server.use(express.json());

//db conex

mongoose.connect('mongodb+srv://kevin:asd123@cluster0.vahxu.azure.mongodb.net/canciones?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

//definimos esquema

const songsSchema = new Schema({
    name: {type: String, required: true},
    album: String,
    duration: Number,
    artist: Array,
})


let songs = mongoose.model('Song', songsSchema);

const connect = mongoose.connection;

connect.once('open', function(){
    console.log('MongoDB ha conectado!')
});

const alistSongList = async (req, res) => {
    const sFind = await songs.find()

    res.send(sFind);
}

//Get
server.get("/", alistSongList);