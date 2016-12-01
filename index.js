var express = require('express')
var app = express();
var router = express.Router();
var path = require('path');
var mongodb = require('mongodb');
var assert = require('assert');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('get-methodoverride');
var engines = require('consolidate');



app.use(express.static('public'));

var routes = require(path.join(__dirname + '/routes/index.js'));


app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');


app.use('/', routes);

// viewed at http://localhost:8080
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function () {
  console.log('Madcast listening on port 3000!')
})

module.exports = app;
