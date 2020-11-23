const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    name: {
        type: String
    },
    password: {
        type: String
    },
    description: {
        type: String
    },
   
    role: {
        type: String,
        enum: ['ADMIN', 'USER'],
        default: 'USER'
    },
    email: String
    
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
