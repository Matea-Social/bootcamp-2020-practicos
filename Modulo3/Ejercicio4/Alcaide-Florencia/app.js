const mongoose = require('mongoose');
const {Schema} = mongoose;

const express = require('express');

const app = express();
const port = 4000;

app.use(express.json());

mongoose.connect('mongodb+srv://Florencia-Alcaide:212487aa@prueba-db.kk1ln.mongodb.net/canciones?retryWrites=true&w=majority',
 {useNewUrlParser: true,  useUnifiedTopology: true});

const cancionSchema = new Schema ({
    name:String,
    artist:String,

});

var songs = mongoose.model('canciones', cancionSchema, 'canciones');

//get
app.get("/", async(req, res)=>{
    console.log('funciona el get')
    var cancion = await songs.find();
    res.send(cancion);
    res.status(200);
});

//post
app.post('/', async(req,res) => {
    var nuevaCancion = {
        name: req.body.name,
        artist: req.body.artist,
    };
    var resultado = new song (nuevaCancion);
    resultado.save();
    res.redirect('/');
    
});

//delete
app.delete('/', async(req, res) => {
    var id =req.body.id;
    canciones.findByIdAndRemove(id);
    res.redirect('/');

})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


