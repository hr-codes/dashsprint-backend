const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/config/db.js')

const app = express();

const routes = require('./src/routes/routes')

app.use(bodyParser.json());

app.use(express.json())

app.use('/api', routes);

app.listen(process.env.APP_PORT, () => console.log(`====== APP LOG: app started on port: ${process.env.APP_PORT}`))

db.sync(() => console.log('====== APP LOG: db connected'));