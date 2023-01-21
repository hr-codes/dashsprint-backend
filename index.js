const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const cors = require('cors')
const bodyParser = require('body-parser');
const db = require('./src/config/db.js')
const routes = require('./src/routes/routes')

const app = express();

app.use(cors())

app.use(bodyParser.json());

app.use(express.json())

app.use('/api', routes);

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

require('./src/services/socket')(io)

httpServer.listen(process.env.APP_PORT, () => {
  console.log(`Example app listening on port ${process.env.APP_PORT}`);
});


db.sync(() => console.log('====== APP LOG: db connected'));