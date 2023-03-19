const bodyparser = require('body-parser');
const express = require('express');
const cors = require('cors');
const engine = require("ejs-locals");
const uploadImage = require('./routes/uploadImage');
const app = express();

app.use(cors({
  origin: '*',
  methods: [
    'GET',
    'POST',
  ],
  allowedHeaders: [
    'Content-Type',
  ],
  credentials: true
}));

app.engine("ejs", engine);
app.set('views', './views');
app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({ limit: '3mb', extended: true }));
app.use(bodyparser.json({ limit: '3mb' }));

app.use(express.static('./uploads'));

app.use('/api', uploadImage);

app.get("/share", (req, res) => {
  res.render('share', {
    title: 'Share',
    shareImg: `https://jeffrey-work.com/uploads/${req.query.shareImg}`,
    description: 'Share Desc'
  });
});

app.listen(4001, function () {
  console.log('app listening on port 4001!');
});