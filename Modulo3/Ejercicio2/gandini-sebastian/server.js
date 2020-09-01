const express = require('express');

var server = express();

const aboutObject = {
  name: 'Sebastian Gandini',
  nickname: 'Cba',
  aboutme: 'Im 20 years old, i actually live in Montevideo with my parents',
  bday: 'July 13th'
}


server.get('/name', function (req, res){
  res.send(aboutObject.name)
})

server.get('/nickname', function (req, res){
  res.send(aboutObject.nickname)
})

server.get('/aboutme', function (req, res){
  res.send(aboutObject.aboutme)
})

server.get('/bday', function (req, res){
  res.send(aboutObject.bday)
})

server.get('/', function (req, res){
  res.send(JSON.stringify(aboutObject))
})

server.listen(3000);