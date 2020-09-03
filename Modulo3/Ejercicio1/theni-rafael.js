const fetch = require("node-fetch");
fetch('https://superheroapi.com/api/10219737048390425/226/appearance')
.then (function(response) {
    return response.text();
  } 
  )
  .then(function(text){
    console.log(text);
 } 
 );

