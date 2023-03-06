const bodyparser = require('body-parser');
const express = require('express');
const cors = require('cors');
const uploadImage = require('./routes/uploadImage');

const app = express();
const multer = require('multer');

const upload = multer({
  limit: {
    fileSize: 10000000
  }
}).single('imageSrc');

app.use(cors({
  origin: '*',
  credentials: true
}));

// app.use(bodyparser.urlencoded({ limit: '10mb', extended: true }));
// app.use(bodyparser.json({ limit: '10mb' }));

app.use('/api', upload, uploadImage);

app.listen(4001, function () {
  console.log('app listening on port 4001!');
});