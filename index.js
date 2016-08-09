var express = require('express');
var app = express();

var port = process.env.PORT || 3333;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
