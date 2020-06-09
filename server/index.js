/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const db = require('../db');

const app = express();

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '..', 'public')));

//multi part
// const upload = multer({ dest: '../../Hack_Reactor' });
// const uploadMiddleware = multer({
//   dest: path.resolve(__dirname, '..', '/uploads/'),
//   fileFilter: function (req, file, cb) {
//     if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
//       return cb(new Error('Only image files are allowed!'));
//     }
//     cb(null, true);
//   },
// }).single('photo');

app.get('/petraits', (req, res) => {
  db.getPhotos();
  res.send('hello');
});
//upload.single('file'),
app.post('/orders', (req, res) => {
  // const file = global.appRoot + '/uploads/' + req.file.filename;
  const order = req.body;
  console.log(order);
  db.uploadOrder(order, (err, results) => {
    if (err) res.status(500).send(err);
    else res.send(results);
  });
});

//do i need this?
app.post('/completedOrders', (req, res) => {
  const order = req.body;
  console.log(order);
  db.uploadOrder(order, (err, results) => {
    if (err) res.status(500).send(err);
    else res.send(results);
  });
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});

const PORT = 3000;

app.listen(PORT, () => console.log(`server listening at port: ${PORT}`));
