const fetch = require('node-fetch');

fetch("https://superheroapi.com/api/2712189392378985/14/powerstats")
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
    }).catch(function(e) {
        console.log("ERROR", e);
    });