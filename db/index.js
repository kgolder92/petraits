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

const getPhotos = ((callback) => {
  console.log('hello');
  const query = {
    text: 'SELECT * FROM orders.photo, commissions.order_id WHERE orders.id = commissions.order_id',
    // Select photo from orders as o join commissions as c on o.id = c.order_id where o.id = [value];
  };
  // pool.query(query)
  //   .then((res) => callback(null, res))
  //   .catch((err) => callback(err));
});

const uploadOrder = ((order, callback) => {
  const query = {
    text: 'INSERT INTO orders(fullName, petsName, email, photo, notes)',
    values: [order.fullName, order.petsName, order.email, order.photo, order.notes],
  };

  pool.query(query)
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
});

module.exports = {
  pool,
  getPhotos,
  uploadOrder,
};

/*
SELECT orders.photo, commissions.photo FROM orders, commisions WHERE orders.id = commisions.order_id;
*/