const db = require('./database');

const listarCanciones = async (req, res) => {
  const listacanciones = await db.Canciones.find()
  if (listacanciones.length >= 1){
    res.send(listacanciones)
  }
  else{
    res.status(400).send("No existen canciónes en esta base de datos.");
  }
  
};

const obtenerCancionPorNombre = async (req, res) => {
  const nombre = req.params.cancion;
  const resultado = await db.Canciones.find({name : nombre})
  if (resultado.length >= 1){
    res.send(resultado);
  }
  else{
    res.status(400).send("No existe una canción con ese nombre en esta base de datos.");
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
    db.Canciones.create(req.body);
    res.json(req.body);
  } else {
    res.status(400).send("El formato de la canción es incorrecto")
  }
};

const modificoCancion = async (req, res) => {
  const cancion = req.body;
  const nombre = req.params.cancion;
  var query ={name : nombre}
  if (cancionEsValida(cancion)) {
    if(await db.Canciones.findOneAndUpdate(query, 
          {    
            artist: cancion.artist, 
            duration: cancion.duration
          }
        )
      )
    {
      res.json(req.body)
    }
    else(
      res.status(400).send("No existe una canción con ese nombre en esta base de datos.")
    )
  } else {
    res.status(400).send("El formato de la canción es incorrecto.");
  }
};

const eliminarCancionPorNombre = async (req, res) => {
  const nombre = req.params.cancion;
  var query ={name : nombre}
  if (await db.Canciones.deleteOne(query)) {
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
