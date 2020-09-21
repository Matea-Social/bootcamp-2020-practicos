const modelsData = require("../models/songModel")

const listarCanciones = async() => {
    return await modelsData.listarCanciones();
}

const agregarCancion = async(cancionBody) => {
    if(cancionBody.name && cancionBody.album && cancionBody.duration && cancionBody.artist) {
        return await modelsData.agregarCancion(cancionBody);
    }
    return "No se agregó la cancion por formato incorrecto";
}

const buscarCancion = async(name) => {
    return await modelsData.buscarCancion(name)
}

const eliminarCancion = async(name) => {
    return await modelsData.eliminarCancion(name)
}

const actualizarCancion = async(name, cancionBody) => {
    return await modelsData.actualizarCancion(name, cancionBody);
}

module.exports = {
    listarCanciones,
    agregarCancion,
    buscarCancion,
    eliminarCancion,
    actualizarCancion
}