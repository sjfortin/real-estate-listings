var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema. Have the properties have the same names as the database names
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


// export our model
module.exports = mongoose.model('Listings', listingsSchema);
