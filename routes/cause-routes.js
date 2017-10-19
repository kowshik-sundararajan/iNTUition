var express = require('express');
var router = express.Router();

var causes = require('../controllers/causes-controller');

router.get('/', (request, response) => {
    causes.getCauses().then((result) => {
        response.send(result);
    });
});

router.get('/:name', (request, response) => {
    causes.getCause(request).then((result) => {
        response.send(result);
    });
});


router.post('/create', (request, response) => {
    causes.createCause(request).then((result) => {
        response.send(result.message);
    });
});

router.post('/add-contributor', (request, response) => {
    causes.addContributor(request).then((result) => {
        response.send(result);
    });
});

router.post('/update-current', (request, response) => {
    causes.updateCurrent(request).then((result) => {
        response.send(result);
    });
});

module.exports = router;


