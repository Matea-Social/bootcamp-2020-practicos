const express = require('express');
const datos = require('./datos.json');

var server = express();

//Get's
server.get('/', (req, res)=>{
    res.send('Este es el Get');
});

serveer.get('/name',(req, res)=>{
    res.send('/datos/name');
});

serveer.get('/nickname',(req, res)=>{
    res.send('/datos/nickname');
});

serveer.get('/biography',(req, res)=>{
    res.send('/datos/biography');
});

serveer.get('/brithday',(req, res)=>{
    res.send('/datos/brithday');
});


server.listen(5000);
console.log('http//localhost:5000/');