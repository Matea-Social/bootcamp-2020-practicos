// Lista de canciones

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
  const listacanciones = await Canciones.find()
  res.send(listacanciones)
};

const obtenerCancionPorNombre = async (req, res) => {
  const nombre = req.params.cancion;
  const resultado = await Canciones.find({name : nombre})
  if (resultado.length >= 1){
    res.send(resultado);
  }
  else{
    res.status(400).send("No existe una cancion con ese nombre en nuestra base de datos.");
  }
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
    Canciones.create(req.body);
    res.json(req.body);
  } else {
    res.status(400).send("El formato de la canción es incorrecto");
  }
};

const modificoCancion = async (req, res) => {
  const cancion = req.body;
  const nombre = req.params.cancion;
  var query ={name : nombre}
  if (cancionEsValida(cancion)) {
    await Canciones.findOneAndUpdate(query, 
        {     name: cancion.name, 
              artist: cancion.artist, 
              duration: cancion.duration
        }
      )
    res.json(req.body);
  } else {
    res.status(400).send("El formato de la canción es incorrecto.");
  }
};

const eliminarCancionPorNombre = async (req, res) => {
  const nombre = req.params.cancion;
  var query ={name : nombre}
  if (await Canciones.deleteOne(query)) {
    res.send("Canción eliminada.");
  } else {
    res.status(400).send("No se puede encontrar una cancion con ese nombre.");
  }
};

module.exports = {
  listarCanciones,
  nuevaCancion,
  obtenerCancionPorNombre,
  eliminarCancionPorNombre,
  modificoCancion
};
