const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    continent: {
        type: String,
        required: true
    },
        
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    },
    image: String
}, {
    timestamps: true
});

// countrySchema.index({ location: '2dsphere' });

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;