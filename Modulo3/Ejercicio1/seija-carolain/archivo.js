const fetch = require('node-fetch');

fetch("https://superheroapi.com/api/891030528091727/10")
.then(function(response){
    return response.json();
})
.then(function(myJson){
    console.log(myJson);
}).catch(function(e){
    console.log('ERROR', e);
});