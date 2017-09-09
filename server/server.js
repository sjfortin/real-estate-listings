var express = require('express');
var app = express();

// Requires
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var listings = require('./routes/listings.js');
var rentals = require('./routes/rentals.js');

// var databaseURI = '';
// // process.env.MONGODB_URI will only be defined if you 
// // are running on Heroku
// if (process.env.MONGODB_URI != undefined) {
//     // use the string value of the environment variable
//     databaseURI = process.env.MONGODB_URI;
// } else {
//     // use the local database server
//     databaseURI = 'mongodb://localhost:27017/realestate';
// }

// mongoose.Promise = global.Promise

// mongoose.connect(databaseURI, { useMongoClient: true });


// Mongoose connection 
// Prior to connecting to Heroku mLab
// var databaseUrl = 'mongodb://localhost:27017/realestate';

// mongoose.connect(databaseUrl, { useMongoClient: true });

var databaseURI = '';
// process.env.MONGODB_URI will only be defined if you are running on Heroku
if (process.env.MONGODB_URI != undefined) {
    // use the string value of the environment variable
    databaseURI = process.env.MONGODB_URI;
} else {
    // use the local database server
    databaseURI = 'mongodb://localhost:27017/realestate';
}

mongoose.connect(databaseURI);

// Optional, but nice to have
mongoose.connection.on('connected', function () {
    // console.log('mongoose connected to : ', databaseUrl);
});
mongoose.connection.on('error', function (err) {
    // console.log('mongoose connection error to : ', err);
});

// Static
app.use(express.static('public'));

// Body parser
app.use(bodyParser.json());

// Routing
app.use('/listings', listings);
app.use('/rentals', rentals);

// server listen
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('Running on port', port);
});