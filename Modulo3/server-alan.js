const http = require('http');

const server = http.createServer();

server.on('request',(req, res)=>{
    res.end('Hola Matea!!!!!'); 
});

server.listen(4000);
console.log("http://localhost:4000/")