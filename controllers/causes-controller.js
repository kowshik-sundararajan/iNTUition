var {Cause} = require('../models/Cause');

var getCause = (request) => {
    return new Promise((resolve, reject) => {
        Cause.findOne({name: request.params.name}).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
};

var getCauses = () => {
    return new Promise((resolve, reject) => {
        Cause.find({}).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
};

var createCause = (request) => {
    //check if cause is already present
    return new Promise((resolve, reject) => {
        Cause.findOne({name: request.body.name}).then((result) => {
        if (!result) { // user is not registered, create a new user
            let temp = new Cause({
                name: request.body.name,
                description: request.body.description,
                organization: request.body.organization || null,
                category: request.body.category,
                start: request.body.start,
                end: request.body.end,
                goal: request.body.goal,
                current: request.body.current || 0
            });

            temp.save().then((cause) => {
                resolve({status: 1, message: `${cause.name} has been created`});
            }, (error) => {
                reject(error);
            }); 
        } else {
            resolve({status: 0, message: 'Cause already exists'});
        }
    });
    });
};

var addContributor = (request) => {
    return new Promise((resolve, reject) => {
        Cause.findOneAndUpdate({name: request.body.name}, {new: true}, 
        {
            $push: {
                "contributors": {
                    contributorId: request.body.contributorId
                }
            }
        }).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
};

var updateCurrent = (request) => {
    return new Promise((resolve, reject) => {
        Cause.findOneAndUpdate({name: request.body.name}, {new: true}, 
        {
            $inc: {
                current: request.body.current
            }
        }).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
};

// var addOrganization = (request) => {
//     return new Promise((resolve, reject) => {
//         Cause.findOneAndUpdate({name: request.body.name},
//             {
//                 new: true
//             },
//             {
//                 $set: {
//                     organizationId: request.body.organizationId
//                 }
//             }).then((result) => {
//                 resolve({status: 1, message: 'Organization has been added'});
//         }).catch((error) => {
//             reject({status: 0, message: 'Organization was not added'});
//         });
//     })
// };


module.exports = {
    createCause: createCause,
    addContributor: addContributor,
    updateCurrent: updateCurrent,
    getCauses: getCauses,
    getCause: getCause
    // addOrganization: addOrganization
}
