require('dotenv').config()
const express = require("express");
const helmet = require("helmet");


//ROUTERS
const projectsRouter = require("./api/projectRouter");
const actionsRouter = require("./api/actionsRouter");

const server = express();

// MiddleWare
server.use(express.json());
server.use(helmet());

// SERVER ROUTES
server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

server.get("/", (req, res) => {
  res.send(`<h1>Hello from the API</h1>`);
});

module.exports = server;
