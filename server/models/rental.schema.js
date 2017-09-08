var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rentalSchema = new Schema(
    {
        rent: {
            type: Number
        },
        sqft: {
            type: Number
        },
        city: {
            type: String
        }
    },
    {
        collection: 'rentals'
    }
);

module.exports = mongoose.model('Rental', rentalSchema);
