var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rentalsSchema = new Schema({
    rent: {
        type: Number
    },
    sqft: {
        type: Number
    },
    city: {
        type: String
    }
});

module.exports = mongoose.model('Rentals', rentalsSchema);
