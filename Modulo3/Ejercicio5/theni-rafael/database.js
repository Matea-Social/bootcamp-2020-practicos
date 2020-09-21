const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rth:RAFA1472@rthdb.7bsiw.mongodb.net/mateify?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
const connection = mongoose.connection;

connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
    }   
);


const {Schema} = mongoose;

const cancionSchema = new Schema (
{
    name: {type: String, required: true},
    artist:String,
    duration:String
}, {collection: 'songList'}
)

let Canciones = mongoose.model('songList', cancionSchema);

module.exports = {
    Canciones
};