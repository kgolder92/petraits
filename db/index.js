/* eslint-disable no-console */
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

pool.connect((err) => {
  if (err) console.log('could not connect to postgres :(', err);
  else console.log('connected to postgres :)');
});

const getPhotos = () => {
  console.log('hello');
};

module.exports = {
  pool,
  getPhotos,
};
