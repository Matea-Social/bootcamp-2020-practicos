const fetch = require("node-fetch");


fetch('https://superheroapi.com/api/3284066315004475/270/work')
    .then (function(response) {
        return response.text();
    })
      .then(function(text){
        console.log(text);
    });