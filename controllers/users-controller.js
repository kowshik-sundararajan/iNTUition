var {User} = require('../models/User');

var getUser = (request) => {
    return new Promise((resolve, reject) => {
        User.findOne({name: request.params.name}).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
};

var getUsers = () => {
    return new Promise((resolve, reject) => {
        User.find({}).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
};

var createUser = (request) => {
    //check if user is already present
    return new Promise((resolve, reject) => {
        User.findOne({email: request.body.email}).then((result) => {
        if (!result) { // user is not registered, create a new user
            let temp = new User({
                name: request.body.name,
                email: request.body.email
            });

            temp.save().then((user) => {
                resolve({status: 1, message: `${user.name} has been created`})
            }, (error) => {
                reject(error);
            }); 
        } else {
            resolve({status: 0, message: 'User has already been registered'});
        }
    });
    });
};

var updateUserXp = (request) => {
    return new Promise((resolve, reject) => {
        User.findOneAndUpdate({email: request.body.email}, { new: true },
        {
            $inc: {
                xp: request.body.xp
            }
        }).then((result) => {
            resolve(result.xp);
        }).catch((error) => {
            reject(error);
        });
    });
};

var updateUserRewards = (request) => {
    return new Promise((resolve, reject) => {
        User.findOneAndUpdate({email: request.body.email}, { new: true },
        {
            $inc: {
                rewards: request.body.rewards
            }
        }).then((result) => {
            resolve(result.rewards);
        }).catch((error) => {
            reject(error);
        });
    });
};

// var updateUser = (user, field, update) => {
//     var options = {
//         name: user.name,
//         email: user.email,
//         xp: user.xp,
//         rewards: user.rewards,
//         achievements: user.achievements,
//         interests: user.interests
//     };

//     if (field) {
//         if (field == "xp" || field == "rewards") {
//             options[field] += update;
//         } else {
//             options[field] = update; 
//         }
//     }

//     return new Promise((resolve, reject) => {
//        User.findOneAndUpdate({ email: user.email }, options).then((user) => {
//         resolve({
//             status: 0,
//             message: `${user.name}'s ${field} has been updated to ${options[field]}`
//         });
//     }).catch((error) => {
//         reject(error);
//     });
// });

module.exports = {
    createUser: createUser,
    updateUserXp: updateUserXp,
    updateUserRewards: updateUserRewards,
    getUsers: getUsers,
    getUser: getUser
}
