var express = require('express');
var router = express.Router();

var organizations = require('../controllers/organizations-controller');

router.get('/', (request, response) => {
    organizations.getOrganizations().then((result) => {
        response.send(result);
    });
});

router.get('/:name', (request, response) => {
    organizations.getOrganization(request).then((result) => {
        response.send(result);
    });
});


router.post('/create', (request, response) => {
    organizations.createOrganization(request).then((result) => {
        response.send(result.message);
    });
});

router.post('/add-cause-to-organization', (request, response) => {
    organizations.addCauseToOrganization(request).then((result) => {
        response.send(result);
    });
});

router.post('/delete-cause-from-organization', (request, response) => {
    organizations.deleteCauseFromOrganization(request).then((result) => {
        response.send(result);
    });
});

module.exports = router;


