const express = require('express');
const hbs = require('hbs');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
// var {User} = require('./models/User');
// var {Cause} = require('./models/Cause');
// var {Organization} = require('./models/Organization');

// var users = require('./controllers/users');

const PORT = process.env.PORT || 3000;

var app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/users', require('./routes/user-routes'));
app.use('/causes', require('./routes/cause-routes'));
app.use('/organizations', require('./routes/organization-routes'));

app.use('/', (request, response) => {
    response.send('Home page!');
});

app.listen(PORT, () => {
    console.log(`* app started on port ${PORT}`);
});
