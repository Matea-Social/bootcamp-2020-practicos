let listaDeCanciones = [];

const listarCanciones = (req, res) => {
  if (listaDeCanciones.length > 0) {
    res.json({
      canciones: listaDeCanciones,
    });
  } else {
    res.status(404).send("No se encontraron canciones!");
  }
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

const actualizarCancion = (req, res) => {
const nombre = req.params.cancion;
const resultado = listaDeCanciones.filter((cancion) => {
    if (cancion.name !== nombre) {
    return true;
    }
    return false;
});
listaDeCanciones = resultado;
const cancion = req.body;
if (cancionEsValida(cancion)) {
  listaDeCanciones.push(req.body);
  res.json(req.body);
} else {
  res.status(400).send("El formato de la canción es incorrecto");
}
}


module.exports = {
  listarCanciones,
  nuevaCancion,
  obtenerCancionPorNombre,
  eliminarCancionPorNombre,
  actualizarCancion
};
