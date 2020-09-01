const express = require('express');

var server = express();

server.get('/', function(req, res) {
    res.json({
        nombre: 'Leandro Nuñez',
        apodo: 'Hubo un tiempo en que me decian "Toto"',
        sobremi: 'Me considero carismatico, alegre (pocas veces se me ve mal), me gusta ayudar y aprender. Tambien me gustan los deportes y amo la música.',
        cumple: 'Mi cumple es el 14 de mayo de todos los años.'
    });
});
server.get('/nombre', function(req, res) {
    res.send('Leandro Nuñez');
});
server.get('/apodo', function(req, res) {
    res.send('Hubo un tiempo en que me apodaron "Toto"');
});
server.get('/sobremi', function(req, res) {
    res.send('Me considero carismatico, alegre (pocas veces se me ve mal), me gusta ayudar y aprender. Tambien me gustan los deportes y amo la música.');
});
server.get('/cumple', function(req, res) {
    res.send('Mi cumple es el 14 de mayo de todos los años.');
});

server.listen(4000);