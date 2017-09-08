var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var saleSchema = new Schema(
    {
        cost: {
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
        collection: 'listings'
    }
);

module.exports = mongoose.model('Sale', saleSchema);
