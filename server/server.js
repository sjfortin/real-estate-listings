var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var listings = require('./routes/listings.js');
var rentals = require('./routes/rentals.js');

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/listings', listings);
app.use('/rentals', rentals);

// Connection
var databaseUrl = 'mongodb://localhost:27017/realestate';
mongoose.connect(databaseUrl,
    { useMongoClient: true });

mongoose.connection.on('connected', function () {
    console.log('mongoose connected to : ', databaseUrl);
});
mongoose.connection.on('error', function (err) {
    console.log('mongoose connection error to : ', err);
});

app.listen(port, function () {
    console.log('Running on port', port);
});