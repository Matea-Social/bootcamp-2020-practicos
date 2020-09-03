const express = require('express');
const { get } = require('http');

//representa al Json
const todo = [{
    name: 'Carolain Seija',
    nickName: 'Juli',
    about: 'Tengo 22 años, estoy estudiando Programacion y amo el maquillaje',
    birthiday: '10 de agosto'
}]

var server = express();
server.get('/name', function(req, res){
    res.send('Carolain Seija');
});
var server = express();
server.get('/nickName', function(req, res){
    res.send('Juli');
});
var server = express();
server.get('/about', function(req, res){
    res.send('Tengo 22 años, estoy estudiando Programacion y amo el maquillaje');
});
var server = express();
server.get('/birthiday', function(req, res){
    res.send('10 de Agosto');
});

var server = express();
server.get('/', function(req, res){
    res.json(todo)
})

server.listen(3000);
console.log('http://localhost:3000/');

