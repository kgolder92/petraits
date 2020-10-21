/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const multer = require('multer');
// const fs = require('fs');
const db = require('../db');

const app = express();

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '..', 'public')));

// multi part
// const uploadMiddleware = multer({
//   dest: path.resolve(__dirname, '..', '/uploads/'),
//   fileFilter: function (req, file, cb) {
//     if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
//       return cb(new Error('Only image files are allowed!'));
//     }
//     cb(null, true);
//   },
// }).single('photo');

/* storage variable where the destination folder being used
  and providing a filename for the file being uploade */
const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './public/uploads');
  },
  filename(req, file, callback) {
    callback(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb('type of file is not supported', false);
  }
};

const upload = multer({
  storage,
  fileFilter,
});

app.get('/petraits', (req, res) => {
  db.getPhotos((err, results) => {
    if (err) res.status(500).send(err);
    else res.send(results.rows);
  });
});


app.post('/single', upload.single('image'), (req, res) => {
  console.log(req.file);

  try {
    res.send(req.file);
  } catch (err) {
    res.sendStatus(400);
  }
  // db.uploadOrder(req.file, (err) => {
  //   if (err) res.status(400).send(err);
  //   else res.send(req.file);
  // });
});


app.post('/orders', upload.single('photo'), (req, res) => {
  const order = req.body;
  console.log(req.body);
  order.photo = req.file.filename;
  // console.log('file', req.file);
  db.uploadOrder(order, (err, results) => {
    if (err) res.status(500).send(err);
    else res.send(results);
  });
});

app.post('/completedOrders', upload.single('completedimage'), (req, res) => {
  const order = req.body;
  order.photo = req.file.filename;

  // console.log(order);
  console.log(req.body.imageName);

  db.uploadCompletedPetrait(order, (err, results) => {
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
