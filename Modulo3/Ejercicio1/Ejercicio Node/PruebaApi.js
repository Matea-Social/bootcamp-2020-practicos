const fetch = require ( 'fetch-node' ) ; 

fetch('https://superheroapi.com/api/2712189392378985/1')
    .then(res => res.json())
    .then(json => console.log(json));