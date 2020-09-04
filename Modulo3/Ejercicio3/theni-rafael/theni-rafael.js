const songs = require('./songList.json');

const express = require('express')
const app = express()
const port = 1000

app.get('/', (req, res) => {
  let qname = req.query.name;
  const validateSong = (e) => {
    if (e.name === qname){
        return true;
    }
    else{
        return false;
    }
}
  const songFound = songs.filter(validateSong);
  if(songFound.length > 0){
    res.send(songFound)
  }
  else{
    res.send(songs)
  }
  
})
app.get('/', (req, res) => {
  let page = req.query.page;
  res.send('Su nombre es '+ person.name)
})
app.get('/apodo', (req, res) => {
  res.send('Le dicen '+ person.nick)
})
app.get('/sobremi', (req, res) => {
  res.send('Es un '+ person.desc)
})
app.get('/cumple', (req, res) => {
  res.send('Su cumpleaños es el '+ person.birthDate)
})

app.listen(port, () => {
  console.log(`Server hosteado correctamente en http://localhost:${port}`)
})
