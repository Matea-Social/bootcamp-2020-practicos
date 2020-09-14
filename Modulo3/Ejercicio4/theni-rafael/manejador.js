// Lista de canciones
const listaDeCanciones = [];

const mongoose = require('mongoose');
const {Schema} = mongoose;
mongoose.connect('mongodb+srv://rth:RAFA1472@rthdb.7bsiw.mongodb.net/mateify?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true });

const cancionSchema = new Schema (
  {
    name: {type: String, required: true},
    artist:String,
    duration:String
  }, {collection: 'songList'}
)

let Canciones = mongoose.model('songList', cancionSchema);

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});
const listarCanciones = async (req, res) => {
  const lala = await Canciones.find()
  res.send(lala)
};

const obtenerCancionPorNombre = (req, res) => {
  const nombre = req.params.cancion;

  const resultado = listaDeCanciones.filter((cancion) => {
    if (cancion.name === nombre) {
      return true;
    }

    return false;
  });

  res.send(resultado);
};

// valida que el formato de la cancion sea valida
const cancionEsValida = (cancion) => {
  if (cancion.name && cancion.artist && cancion.duration) {
    return true;
  }
  return false;
};

const nuevaCancion = (req, res) => {
  const cancion = req.body;
  if (cancionEsValida(cancion)) {
    listaDeCanciones.push(req.body);
    res.json(req.body);
  } else {
    res.status(400).send("El formato de la canción es incorrecto");
  }
};

const modificoCancion = (req, res) => {
  const cancion = req.body;
  const nombre = req.params.cancion;
  if (cancionEsValida(cancion)) {
    const resultado = listaDeCanciones.filter((e) => {
    if (e.name !== nombre) {
      return true;
    }
    return false;
    });
    listaDeCanciones = resultado;
    listaDeCanciones.push(cancion);
    res.json(req.body);
  } else {
    res.status(400).send("El formato de la canción es incorrecto");
  }
};

const eliminarCancionPorNombre = (req, res) => {
  const nombre = req.params.cancion;

  const resultado = listaDeCanciones.filter((cancion) => {
    if (cancion.name !== nombre) {
      return true;
    }

    return false;
  });

  listaDeCanciones = resultado;

  res.send("Canción eliminada");
};

module.exports = {
  listarCanciones,
  nuevaCancion,
  obtenerCancionPorNombre,
  eliminarCancionPorNombre,
  modificoCancion
};
