const Pool = require("pg").Pool;
const env = require("dotenv").config();
const database = process.env.DATABASE;
const password = process.env.PASSWORD;
const port = process.env.DB_PORT;
const user = process.env.USER;
const host = process.env.HOST;

const pool = new Pool({
  user: user,
  host: host,
  database: database,
  password: password,
  port: port,
});
module.exports = pool;
