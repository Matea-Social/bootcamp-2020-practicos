let canciones = [{
    "name": "name",
    "artist": "artist",
    "duration": "duration",
  }];

const listarCanciones = (req, res) => {
    if(canciones.length > 0){
        res.send(canciones);
    } else {
        res.status(404).send("No se encontraro canciones!");
    }
}

const validarCancion = (cancion) => {
    if(cancion.name && cancion.artist && cancion.duration){
        return true;
    }
    return false;
}

const agregarCancion = (req, res) => {
    const cancion = req.body;
    if(validarCancion(cancion) == true){
        canciones.push(cancion);
        res.status(201).json(cancion);
    } else {
        res.status(400).send("El formato de la canción es incorrecto!");
    }
}

const obtenerCancionPorNombre = (req, res) => {
    var nombre = req.params.name;

    const resultado = canciones.filter((element) => {
        if (element.name === nombre) {
            console.log(element.name);
            return true;
        }
            return false;
    })
    res.send(resultado);
}

const modificarCancion = (req, res) => {
    const cancion = req.body;
    if(validarCancion(cancion) == true){
        const filtro = (element) => {
            if(element.name !== cancion.name){
                // false: no se agrega, true: sí se agrega
                return false;
            } else {
                return(
                    element.name = cancion.name,
                    element.artist = cancion.artist,
                    element.duration = cancion.duration
                )
            }
        }
        let resultado = canciones.filter(filtro)
        res.send(resultado);
    } else {
        res.status(400).send("El formato de la canción es incorrecto!");
    }
}

const eliminarCancion = (req, res) => {
    var nombre = req.params.name;
    const resultado = (element) => {
      if(element.name !== nombre){
        return true;
      } else {
        var index = canciones.indexOf(element);
        canciones.splice(index, 1);
      }
    }
    res.send(canciones.filter(resultado));
}

module.exports = {
    listarCanciones,
    agregarCancion,
    obtenerCancionPorNombre,
    modificarCancion,
    eliminarCancion,
};