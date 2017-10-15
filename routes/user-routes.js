var express = require('express');
var router = express.Router();

var users = require('../controllers/users-controller');

router.get('/', (request, response) => {
    users.getUsers().then((result) => {
        response.send(result);
    });
});

router.get('/:name', (request, response) => {
    users.getUser(request).then((result) => {
        response.render('profile');
    });
});

router.get('/:name/rewards', (request, response) => {
    response.render('rewards');
})


router.post('/submit', (request, response) => {
    users.createUser(request).then((result) => {
        response.send(result.message);
    });
});

router.post('/update-xp', (request, response) => {
    users.updateUserXp(request).then((result) => {
        response.send(JSON.stringify(result));
    });
});

router.post('/update-rewards', (request, response) => {
    users.updateUserRewards(request).then((result) => {
        response.send(JSON.stringify(result));
    });
});

module.exports = router;


