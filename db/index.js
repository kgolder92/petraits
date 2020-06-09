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
    text: 'SELECT orders.photo, commissions.photo FROM orders, commissions WHERE orders.id = commissions.order_id',
    // Select photo from orders as o join commissions as c on o.id = c.order_id where o.id = [value];
  };
  pool.query(query)
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
});

const uploadOrder = ((order, callback) => {
  const query = {
    text: 'INSERT INTO orders(full_name, pet_name, email, photo, notes) VALUES ($1, $2, $3, $4, $5)',
    values: [order.fullName, order.petsName, order.email, order.photo, order.notes],
  };

  pool.query(query)
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
});

const uploadCompletedPetrait = ((order, callback) => {
  const query = {
    text: 'INSERT INTO commissions(photo, order_id) VALUES ($1, $2)',
    values: [order.photo, order.orderid],
  };

  pool.query(query)
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
});

module.exports = {
  pool,
  getPhotos,
  uploadOrder,
  uploadCompletedPetrait,
};

/*
SELECT orders.photo, commissions.photo FROM orders, commisions WHERE orders.id = commisions.order_id;
*/