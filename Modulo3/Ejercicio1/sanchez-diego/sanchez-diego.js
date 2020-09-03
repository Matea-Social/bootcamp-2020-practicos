const fetch = require('node-fetch');

fetch("https://superheroapi.com/api/2708911589426461/332")
.then(function(response){
    return response.json();
})
.then(function(myJson){
    console.log(myJson);
}).catch(function(e){
    console.log('ERROR', e);
});