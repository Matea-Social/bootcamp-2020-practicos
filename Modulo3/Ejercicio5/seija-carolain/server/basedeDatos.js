                 //EXPRESS

//importaciones de Express
const express = require("express");

const app = express();
app.use(express.json());

//Importacion del controlador
const controlador = require('./controlador');

//get devuelve todo
app.get("/", function (req, res) {
    try {
        let canciones = controlador.listaCanciones();
        res.status(200);
        res.send(canciones);
    } catch (error) {
        res.status(500);
        res.send('algo salio mal');
    }
});

//get busca una cancion
app.get("/:name", function (req, res) {
    try {
        let cancion = controlador.cancionBuscada();
        res.status(200);
        res.send(cancion);
    } catch (error) {
        res.status(500);
        res.send("algo salio mal");
    }
});
//elimina a cancion

app.delete("/name", function(req, res){ 
 try { 
     let cancionEliminar = controlador.cancionAeliminar();
     res.status(200);
     res.send(cancionEliminar);
 }catch(error) { 
     res.status(500);
     res.send("algo salio mal");
 }
});
app.post("/", function(req, res){ 
    try { 
        let agregaCancion = controlador.cancionAgregada();
        res.status(200);
        res.send(agregaCancion);
    }catch(error) { 
        res.status(500);
        res.send("algo salio mal");
    }
   });


//puerto del local host:
app.listen(3000);
console.log("http://localhost:3000");
