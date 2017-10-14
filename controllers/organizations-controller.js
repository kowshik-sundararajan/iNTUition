var {Organization} = require('../models/Organization');

var getOrganization = (request) => {
    return new Promise((resolve, reject) => {
        Organization.findOne({name: request.params.name}).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
};

var getOrganizations = () => {
    return new Promise((resolve, reject) => {
        Organization.find({}).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
};


var createOrganization = (request) => {
    //check if organization is already present
    return new Promise((resolve, reject) => {
        Organization.findOne({name: request.body.name}).then((result) => {
        if (!result) { // user is not registered, create a new user
            let temp = new Organization({
                name: request.body.name,
                description: request.body.description
            });

            temp.save().then((org) => {
                resolve({status: 1, message: `${org.name} has been created`})
            }, (error) => {
                reject(error);
            }); 
        } else {
            resolve({status: 0, message: 'Organization has already been registered'});
        }
    });
    }); 
};

var addCauseToOrganization = (request) => {
    return new Promise((resolve, reject) => {
        Organization.findOneAndUpdate({name: request.body.name},
            {
                new: true
            },
            {
                $push: {
                    "causes": {
                        causeId: request.body.causeId
                    }
                }
            }).then((result) => {
                resolve({status: 1, message: 'Cause has been added'});
        }).catch((error) => {
            reject({status: 0, message: 'Cause was not added'});
        });
    })
};

var deleteCauseFromOrganization = (request) => {
    return new Promise((resolve, reject) => {
        Organization.findOneAndUpdate({name: request.body.name},
            {
                new: true
            },
            {
                $pull: {
                    "causes": {
                        causeId: request.body.causeId
                    }
                }
            }).then((result) => {
                resolve({status: 1, message: 'Cause has been deleted'});
        }).catch((error) => {
            reject({status: 0, message: 'Cause was not deleted'});
        });
    });
};


module.exports = {
    createOrganization: createOrganization,
    addCauseToOrganization: addCauseToOrganization,
    deleteCauseFromOrganization: deleteCauseFromOrganization,
    getOrganizations: getOrganizations,
    getOrganization: getOrganization
};
