const misDatos= {
    nombre:'Florencia Alcaide',
    apodo:'Flopi o Flor',
    sobremi:'Tengo 19 años, soy amante de los animales y el café.',
    cumple:'9 de octubre'
};

const express = require("express");

var server = express();

server.get('/', function (req, res){
    res.send(misDatos);
});
server.get('/nombre', function (req, res){
    res.send(misDatos.nombre);
});
server.get('/apodo', function (req, res){
    res.send(misDatos.apodo);
});
server.get('/sobremi', function (req, res){
    res.send(misDatos.sobremi);
});
server.get('/cumple', function (req, res){
    res.send(misDatos.cumple);
});


server.listen(3000);