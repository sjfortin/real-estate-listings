var express = require('express');
var router = express.Router();
var Rental = require('../models/rental.schema.js');

router.get('/', function (req, res) {
    Rental.find({}, function (err, data) {
        if (err) {
            console.log('find error: ', err);
            res.sendStatus(500);
        } else {
            console.log('found data from GET', data);
            res.send(data);
        }
    });
});

router.post('/', function (req, res) {
    var propertyToAdd = new Rental(req.body);

    propertyToAdd.save(function (err, data) {
        if (err) {
            console.log('save error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }

    });
});

module.exports = router;