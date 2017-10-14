var mongoose = require('mongoose');

var Organization = mongoose.model('Organization', {
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
    categories: [{
        type: String,
        minlength: 1,
        trim: true
    }],
    causes: [{
        causeId: mongoose.Schema.Types.ObjectId,
    }]
});

module.exports = {Organization};
