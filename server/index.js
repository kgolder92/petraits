/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const db = require('../db');

const app = express();

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.get('/gallery', (req, res) => {
  db.getPhotos();
  res.send('hello');
});

app.post('/gallery', (req, res) => {
  db.getPhotos();
  res.send('hello');
});
const PORT = 3000;

app.listen(PORT, () => console.log(`server listening at port: ${PORT}`));
