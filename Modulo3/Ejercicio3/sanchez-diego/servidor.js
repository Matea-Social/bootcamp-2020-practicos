const express = require('express');

const server = express();
const songs = song=[];

server.use(express.json());

server.get('/', (req, res)=>{
    if(songs.length > 0){
        res.jsong({
            songs: songs,
        });
    }else{
        res.status(500).send('No se encontraron canciones');
    }
});

server.get('/:nombre', (req, res)=>{
    res.send(),
    res.status(200);
});

server.post('/', (req, res)=>{
    var song = req.body;
    console.log(song);
    songs.push(song);
    res.status(201).send('Se agrego la concion correctamente.');
});

server.delete('/:song', (req, res)=>{
        res.send('Delete the Song ${JSON.stringify(req.params)}');
    }
});


server.listen(5000);
console.log(server.listen);