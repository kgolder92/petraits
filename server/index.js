/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const db = require('../db');

const app = express();

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '..', 'public')));

//multi part


app.get('/petraits', (req, res) => {
  db.getPhotos();
  res.send('hello');
});

app.post('/petraits', (req, res) => {
  db.getPhotos();
  res.send('hello');
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});

const PORT = 3000;

app.listen(PORT, () => console.log(`server listening at port: ${PORT}`));
