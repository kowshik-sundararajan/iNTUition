var mongoose = require('mongoose');

var User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: 1,
        lowercase: true,
        unique: true
    },
    xp: {
        type: Number,
        default: 0
    },
    rewards: {
        type: Number,
        default: 0
    },
    achivements: [{
        type: String,
        minlength: 1
    }],
    interests: [{
        type: String,
        minlength: 1
    }]
});

module.exports = {User};
