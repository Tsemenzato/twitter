var express = require('express');
var app = express();
var router = require('./routes');
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'dist')));

router.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.use(router);

function serverOnline () {
  console.log('Server online');
};

app.listen(3000, serverOnline);
