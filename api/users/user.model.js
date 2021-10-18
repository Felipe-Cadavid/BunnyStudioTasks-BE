const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;