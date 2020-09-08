// Lista de canciones
let canciones = [{name:'Clara',artist:'NTVG',duration:'3:14'},{name:'Al vacio',artist:'NTVG',duration:'3:14'}];

const listarCanciones = (req, res) => {
  if (canciones.length > 0) {
    res.json({
      canciones: canciones,
    });
  } else {
    res.status(404).send("No se encontraron canciones!");
  }
};

const obtenerCancionPorNombre = (req, res) => {
  const nombre = req.params.cancion;

  const resultado = canciones.filter((cancion) => {
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
const modificarCancion = (req, res) => {
  const nombre = req.params.cancion;
  const cancionModificada = req.body;
 
  if (cancionEsValida(cancionModificada)) {
    const indice = canciones.findIndex(c => c.name === nombre);
    canciones[indice] = cancionModificada
    res.json(cancionModificada);
  }
   else {
    res.status(400).send("El formato de la canción es incorrecto");
  }

}

const nuevaCancion = (req, res) => {
  if (cancionEsValida(cancion)) {
    canciones.push(req.body);
    res.json(req.body);
  } else {
    res.status(400).send("El formato de la canción es incorrecto");
  }
};

const eliminarCancionPorNombre = (req, res) => {
  const nombre = req.params.cancion;

  const resultado = canciones.filter((cancion) => {
    if (cancion.name !== nombre) {
      return true;
    }

    return false;
  });

  canciones = resultado;

  res.send("Canción eliminada");
};

module.exports = {
  listarCanciones,
  nuevaCancion,
  obtenerCancionPorNombre,
  eliminarCancionPorNombre,
  modificarCancion
};
