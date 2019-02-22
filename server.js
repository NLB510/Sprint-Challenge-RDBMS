const express = require('express');
const helmet = require('helmet')


//ROUTES

const server = express();
server.use(express.json());
server.use(helmet());


// SERVER ROUTES


server.get('/', (req, res) => {
  res.send(`<h1>Hello from the API</h1>`);
})


module.exports = server;