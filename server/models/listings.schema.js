var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listingsSchema = new Schema({
    cost: {
        type: Number
    },
    sqft: {
        type: Number
    },
    city: {
        type: String
    }
});

module.exports = mongoose.model('Listings', listingsSchema);
