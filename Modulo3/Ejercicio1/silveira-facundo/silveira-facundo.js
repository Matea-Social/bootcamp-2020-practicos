const fetch = require('node-fetch');
fetch("https://superheroapi.com/api/3573084329391532/8")
.then(function(response){
    return response.json();
})
.then(function(myJson){
    console.log(myJson);
}).catch(function(e){
    console.log('ERROR', e);
});