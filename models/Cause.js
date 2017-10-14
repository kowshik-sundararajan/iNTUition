var mongoose = require('mongoose');

var Cause = mongoose.model('Cause', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    organization: {
        type: String,
        required: false,
        minlength: 1,
        trim: true
    },
    contributors: [{
        contributorId: mongoose.Schema.Types.ObjectId
    }],
    category: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    goal: {
        type: Number,
        min: 1,
        required: true,
    },
    current: {
        type: Number,
        default: 0,
        required: true
    },
    finalDate: {
        type: Date,
        required: true
    }
});

module.exports = {Cause};
