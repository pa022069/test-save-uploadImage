const express = require('express');
const router = express.Router();

router.route('/')
  // .get(function (req, res) {
  //   res.json("success");
  // })
  .post(function (req, res) {
    console.log('req.files', req.files);
    // const originImg = req.files.image[0];
    res.status(201).json({
      data: {
        msg: 'success',
        req
        // imageSrc: originImg
      },
    });
    // res.status(404).json({
    //   errorMsg: '資料不完全！'
    // });
  });

module.exports = router;