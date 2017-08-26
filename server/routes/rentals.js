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

router.delete('/:id', function (req, res) {

    Rental.findByIdAndRemove(
        { _id: req.params.id },
        function (err, data) {
            if (err) {
                console.log('delete error: ', err);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        });
});

router.put('/:id', function (req, res) {
    var rentalId = req.params.id;
    console.log('this is the new rental', req.body);
    Rental.findByIdAndUpdate(
        {
            _id: rentalId
        },
        {
            $set: {
                rent: req.body.rent,
                sqft: req.body.sqft,
                city: req.body.city
            }
        },
        function (err, data) {
            if (err) {
                console.log('save error: ', err);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});

module.exports = router;