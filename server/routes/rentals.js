var express = require('express');
var router = express.Router();
var Rentals = require('../models/rentals.schema.js');

router.get('/', function (req, res) {
    Rentals.find({}, function (err, data) {
        if (err) {
            console.log('find error: ', err);
            res.sendStatus(500);
        } else {
            console.log('found data from GET', data);
            res.send(data);
        }
    });
});

module.exports = router;