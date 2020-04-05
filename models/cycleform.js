const mongoose = require('mongoose');
const crypto = require('crypto');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    package: {
        type: String,
    },
    charger: {
        type: String,
    },
    pan: {
        type: String,
    },
});
const User = module.exports = mongoose.model('Bookingdetails', UserSchema);