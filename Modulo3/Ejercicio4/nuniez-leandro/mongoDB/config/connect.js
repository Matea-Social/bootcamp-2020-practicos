const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Leandro-matea:52766735@prueba-db.mzltp.mongodb.net/canciones?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexion'));
db.once('open', function() {
  console.log("MongoDB conectado con Express");
});

module.exports = {
  mongoose,
  db
}