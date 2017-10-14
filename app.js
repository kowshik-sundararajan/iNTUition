const express = require('express');
const hbs = require('hbs');
var bodyParser = require('body-parser');
const axios = require('axios');

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

// var makeRequest = () => {
//     return new Promise((resolve, reject) => {
//         axios.get('http://localhost:3000/causes/').then((results) => {
//             console.log(results['data']);
//             resolve(results['data']);
//         }).catch((error) => {
//             reject(error);
//         });     
//     });
// }

app.use('/', (request, response) => {
    // makeRequest().then((data) => {
    //     response.render('index.hbs', {
    //         causes: data
    //     });
    // });
    response.render('index.hbs');
});

app.listen(PORT, () => {
    console.log(`* app started on port ${PORT}`);
});
