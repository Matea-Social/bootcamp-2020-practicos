const person = require('./Persona.json');

const express = require('express')
const app = express()
const port = 1000

app.get('/', (req, res) => {
  res.send('La persona se llama ' + person.name + ' le dicen ' + person.nick + ' nace el ' + person.birthDate + ' y es un ' + person.desc)
})
app.get('/nombre', (req, res) => {
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
