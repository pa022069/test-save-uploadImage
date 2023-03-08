const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      cb(new Error('Please upload an image'))
    }
    // let extArray = file.mimetype.split("/");
    // let extension = extArray[extArray.length - 1];
    // cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
    cb(null, file.originalname);
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
  .get(function (req, res) {
    res.status(200).json({
      msg: 'success',
    });
  })
  .post(upload, function (req, res) {
    const originImg = req.file;
    res.status(200).json({
      msg: 'success',
      shareImg: originImg.filename
    });
  });

module.exports = router;