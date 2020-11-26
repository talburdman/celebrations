const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebrationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    traditions: String,
    country: [String],
    links: [String],
    image: String,
        
}, {
    timestamps: true
});


const Celebration = mongoose.model('Celebration', celebrationSchema);

module.exports = Celebration;