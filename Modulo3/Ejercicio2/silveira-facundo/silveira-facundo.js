const express = require('express');

const lasOtrasCosas = 
[{
    'nombre':'Facundo Silveira',
    'apodo':'Facu',
    'sobremi':'Me llamo Facundo, tengo 17 años y me gusta programar.',
    'cumple':'21 de noviembre',
}];

const server = express();

server.get('/', (req, res) => {
    res.json(lasOtrasCosas);
});

server.get('/nombre', (req, res) => {
    res.send('Facundo Silveira');
});

server.get('/apodo', (req, res) => {
    res.send('Facu');
});

server.get('/sobremi', (req, res) => {
    res.send('Me llamo Facundo, tengo 17 años y me gusta programar.');
});

server.get('/cumple', (req, res) => {
    res.send('21 de noviembre');
});

server.listen(4000);
console.log('http://localhost:4000/');