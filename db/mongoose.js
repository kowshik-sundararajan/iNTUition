var mongoose = require('mongoose');

var mode = 'prod';
if (mode == 'dev') {
  var env = require('../env.json');
  var DB_USERNAME = env['DB_USERNAME'];
  var DB_PASSWORD = env['DB_PASSWORD'];
} else {
    var DB_USERNAME = process.env.DB_USERNAME;
    var DB_PASSWORD = process.env.DB_PASSWORD;
}


// Making mongoose use the default promise and not a third-party promise
mongoose.Promise = global.Promise;


var uri = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@ds119675.mlab.com:19675/intuition`;
global.db = mongoose.connect(uri, {
    useMongoClient: true
});

global.db.on('error', console.error.bind(console, 'connection error:'));
// mongoose.connect('mongodb://kowshik:kowshik@ds119675.mlab.com:19675/intuition', {
//     useMongoClient: true
// });

module.exports = {mongoose};
