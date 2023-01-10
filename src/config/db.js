const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
})


const db = {};

db.sequelize = sequelize;

async function checkConnection() {
  await db.sequelize.authenticate();
}

try {
  checkConnection()
    .then(() => console.log('Connection has been established successfully.'))
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = db.sequelize;