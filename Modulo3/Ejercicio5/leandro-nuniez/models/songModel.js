const mongoose = require('mongoose');

//Conection
mongoose.connect('mongodb+srv://Leandro-matea:52766735@prueba-db.mzltp.mongodb.net/canciones?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
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

//Logica

const listarCanciones = async() => {
    const canciones = await Cancion.find();
    return canciones;
}

const agregarCancion = async(cancionBody) => {
    const nuevaCancion = await new Cancion(cancionBody);
    nuevaCancion.save();
}

const buscarCancion = async(name) => {
    const cancion = await Cancion.find({name: name});
    return cancion;
}

const eliminarCancion = async(name) => {
    await Cancion.findOneAndDelete({name: name});
}

const actualizarCancion = async(name, cancionBody) => {
    const cancionUpdate = await Cancion.findOneAndUpdate({name: name}, cancionBody);
    cancionUpdate.save();
}

module.exports = {
    listarCanciones,
    agregarCancion,
    buscarCancion,
    eliminarCancion,
    actualizarCancion
}