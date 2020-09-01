var datosJSON = require('./base-de-datos.json'); 
const express = require('express');


var server = express();

server.get('/nombre', (req, res) => {
    let name = datosJSON.nombre;
    res.send('Me llamo ' + name);
});
server.get('/apodo', (req, res) => {
    let apodo = datosJSON.apodo;
    res.send('Me dicen ' + apodo);
});
server.get('/sobremi', (req, res) => {
    let info = datosJSON.sobreMi;
    res.send(info);
});
server.get('/cumple', (req, res) => {
    let bth = datosJSON.cumple;
    res.send("Cumplo el " + bth + ", así que ya saben!!!1");
});
server.get('/', (req, res) => {
    let allJSON = datosJSON;
    res.send(allJSON);
});


server.listen(4000);

console.log("http://localhost:4000");