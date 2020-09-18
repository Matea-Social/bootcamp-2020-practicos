const express = require("express");
const manejador = require("./manejador");
var mongoose = require('mongoose');
const app = express();
const port = 3000;

var mongoDB = 'mongodb+srv://yonamorgades:1998morgades@cluster0.s55dw.mongodb.net/Mateify?retry' +
    'Writes=true&w=majority';
//Server
app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor escuchando http://localhost:${port}`);
});

//conection
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Return song list
app.get("/", manejador.songList);

// GET /: return only a sign filtered by name
app.get("/:cancion", manejador.findByName);

// POST Create a new son
app.post("/", manejador.addSong);

// DELETE /:cancion delete a song
app.delete("/:cancion", manejador.deleteByName);

// PUT Modifica una canción 
app.put("/:cancion", manejador.updateSong);