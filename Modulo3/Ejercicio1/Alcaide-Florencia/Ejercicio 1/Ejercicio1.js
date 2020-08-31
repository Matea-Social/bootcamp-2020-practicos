
const fetch = require('node-fetch');

fetch('https://superheroapi.com/api/312891730037431/263/appearance')
.then(function(response){
    return response.json();
})
.then(function(myJson) {
    console.log(myJson);    
}).catch(function(e){
    console.log('ERROR', e);
});