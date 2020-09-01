const fetch = require("node-fetch");
fetch('url')
.then (function(response) {
    return response.text();
  } 
  )
  .then(function(text){
    console.log(text);
 } 
 );

