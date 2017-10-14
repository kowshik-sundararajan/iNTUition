const express = require('express');
const hbs = require('hbs');

const PORT = process.env.PORT || 3000;

var app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));


app.get('/', (request, response) => {
    response.send('App started successfully!');
});

app.listen(PORT, () => {
    console.log(`* app started on port ${PORT}`);
});
