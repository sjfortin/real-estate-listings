var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var index = require('./routes/index.js');
var listings = require('./routes/listings.js');
// var rentals = require('./routes/rentals.js');

var mongoose = require('mongoose');

// Middleware
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json()); // needed for angular requests

// Express Routes
app.use('/', index);
app.use('/listings', listings);
// app.use('/rentals', rentals);

// Connection
var databaseUrl = 'mongodb://localhost:27017/realestate';
mongoose.connect(databaseUrl,
    {
        useMongoClient: true
    });

mongoose.connection.on('connected', function () {
    console.log('mongoose connected to : ', databaseUrl);
});
mongoose.connection.on('error', function (err) {
    console.log('mongoose connection error to : ', err);
});

// Start Server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
    console.log('Listening on port: ', app.get('port'));
});