const express = require('express');
const path = require('path');
const db = require('../db');

const app = express();

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.get('/petraits', (req, res) => {
  res.send('hello');
});

const PORT = 3000;

app.listen(PORT, () => console.log(`server listening at port: ${PORT}`));
