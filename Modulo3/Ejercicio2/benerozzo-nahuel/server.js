var dates = require('./dates.json'); 
const express = require('express');


var server = express();

server.get('/nombre', (req, res) => {
    let nombre = dates.nombre;
    res.send(nombre);
});
server.get('/apodo', (req, res) => {
    let apodo = dates.apodo;
    res.send(apodo);
});
server.get('/sobremi', (req, res) => {
    let sobremi = dates.sobreMi;
    res.send(sobremi);
});
server.get('/cumple', (req, res) => {
    let cumple = dates.cumple;
    res.send(cumple);
});
server.get('/', (req, res) => {
    let allDates = dates;
    res.send(allDates);
});


server.listen(4000);

console.log("http://localhost:4000");