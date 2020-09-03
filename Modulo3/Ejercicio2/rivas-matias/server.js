const matiasData = require('./matiasData.json');
const express = require('express');
var server = express();

server.get('/nombre', function(req, res){
  res.send('Matías Rivas');
})

server.get('/apodo', function(req, res){
  res.send('...');
})

server.get('/sobremi', function(req, res){
  res.send('whatever');
})

server.get('/cumple', function(req, res){
  res.send('20-03');
})

server.get('/', function(req, res){
  res.send(matiasData);
})


server.listen(3000);