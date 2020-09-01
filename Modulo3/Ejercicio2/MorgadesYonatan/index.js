const express = require('express');
const app = express();
const port = 3000;
const persona = {nombre:'Yonatan',apodo:'Toto',sobreMi:'Soy de Montevideo tengo 22 años y me gusta tomar mate'}
app.get('/',(req,res) => {
    res.send(persona);
})
app.get('/nombre',(req,res) => {
    res.send(persona.nombre);
})
app.get('/apodo',(req,res) => {
    res.send(persona.apodo);
})
app.get('/sobremi',(req,res) => {
    res.send(persona.sobreMi);
})
app.listen(port, (req,res) => {
    console.log("Inicio el servidor")
});