const express = require('express');



var server = express();


const aboutObject = {
    name : 'Mi nombre es Kevin Iglesias',
    nick : 'No tengo un apodo :(',
    about : 'Me llamo Kevin, tengo 18 años, comencé a programar desde los 16 años... soy aún un inexperto que busca meterse en este mundo y poder colaborar en varias empresas. Actualmente desarollo en una app llamada FiveM la cual utiliza un development kit creado por Valve CO.',
    birthday : 'Mi cumpleaños es el catorce de diciembre',
}




server.get('/', function(req, res){
    res.send(JSON.stringify(aboutObject))
});

server.get('/nombre', function(req, res){
    res.send(aboutObject.name)
});

server.get('/apodo', function(req, res){
    res.send(aboutObject.nick)
});

server.get('/sobremi', function(req, res){
    res.send(aboutObject.about)
});

server.get('/cumple', function(req, res){
    res.send(aboutObject.birthday)
});


/* server.post('/', function(req, res){
    res.send("Esto es un método POST")
});

server.put('/', function(req, res){
    res.send("Esto es un método PUT")
}); */


server.listen(4100);