const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cancionSchema = new Schema({
    name: { type: String, required: true },
    album: { type: String },
    duration: { type: String},
    artist: {
        name: { type: String },
        coverUrl: { type: String }
    }
}) 

let Cancion = mongoose.model('canciones', cancionSchema, 'mateify');

module.exports = Cancion;