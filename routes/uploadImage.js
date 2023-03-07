const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
  }
})

const upload = multer({
  storage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      cb(new Error('Please upload an image'))
    }
    cb(null, true)
  },
  limit: {
    fileSize: 10000000
  }
}).single('imageSrc');

router.route('/')
  .post(upload, function (req, res) {
    const originImg = req.file;
    console.log('imageName', originImg.filename);

    res.status(201).json({
      data: {
        msg: 'success',
      },
    });
  });

module.exports = router;