const bodyparser = require('body-parser');
const express = require('express');
const cors = require('cors');
const uploadImage = require('./routes/uploadImage');

const app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyparser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyparser.json({ limit: '10mb' }));

app.use('/api', uploadImage);

app.listen(4001, function () {
  console.log('app listening on port 4001!');
});