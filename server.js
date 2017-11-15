var express = require('express');
var app = express();
var router = require('./routes');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(router);


function serverOnline () {
  console.log('Server online');
};

app.listen(3000, serverOnline);
