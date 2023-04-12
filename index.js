const bodyparser = require('body-parser');
const express = require('express');
const cors = require('cors');
const engine = require("ejs-locals");

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

app.use('/api', require('./routes/uploadImage'));

app.get("/share", (req, res) => {
  res.render('share', {
    title: '迪士尼百年慶典木質拼圖',
    shareImg: `https://project100.hellofish.com.tw/uploads/${req.query.shareImg}`,
    // shareImg: `http://97.74.84.85:4001/${req.query.shareImg}`,
    description: '收錄一百位迪士尼宇宙的人氣角色，你猜得出來這些角色的名稱跟出自哪部作品嗎?'
  });
});

app.listen(4001, function () {
  console.log('app listening on port 4001!');
});