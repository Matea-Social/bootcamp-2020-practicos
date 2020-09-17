const mongoose = require('mongoose');

//Conection
mongoose.connect('mongodb+srv://Leandro-matea:52766735@prueba-db.mzltp.mongodb.net/canciones?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexion'));
db.once('open', function() {
  console.log("MongoDB conectado con Express");
});

//Schema-Model
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

module.exports = {
    Cancion
} 