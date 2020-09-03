const fetch = require('node-fetch');
fetch('https://superheroapi.com/api/2659560251027308/591')
  .then(res => res.text())
  .then(body => console.log(body));