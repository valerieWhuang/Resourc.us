const { Resources } = require('../models/ResourcesModel');
const resourcesController = {};

resourcesController.createResource = (req, res, next) => {
    const requestBody = req.body;

    Resources.create({
        title: requestBody.title,
        description: requestBody.description,
        link: requestBody.link,
        team: requestBody.team,
        votes: 0,
        tags: requestBody.tags,
        commentsList: [],
        postedBy: requestBody.postedBy,
        relatedLocation: requestBody.relatedLocation,
    })
        .then(data => {
            res.locals.response = data;
            next();
        })
        .catch(err => {
            next({
                log: `Create Resources - ERROR: ${err}`,
                message: {
                    err: 'Error occured in resourcesController.createResource',
                    message: err
                }
            })
        });
}

resourcesController.listResources = (req, res, next) => {
    const requestBody = req.body;

    Resources.find({
        team: requestBody.team,
    })
        .then(data => {
            res.locals.response = data;
            next();
        })
        .catch(err => {
            next({
                log: `List Resources - ERROR: ${err}`,
                message: {
                    err: 'Error occured in resourcesController.listResources',
                    message: err
                }
            })
        });
}

resourcesController.listThreeResources = (req, res, next) => {
    const requestBody = req.body;

    Resources.find({
        team: requestBody.team,
    }, null, { limit: 3 })
        .then(data => {
            res.locals.response = data;
            next();
        })
        .catch(err => {
            next({
                log: `List 3 Resources - ERROR: ${err}`,
                message: {
                    err: 'Error occured in resourcesController.listThreeResources',
                    message: err
                }
            })
        });
}

resourcesController.listAllResources = (req, res, next) => {
    Resources.find({})
        .then(data => {
            res.locals.response = data;
            next();
        })
        .catch(err => {
            next({
                log: `List All Resources - ERROR: ${err}`,
                message: {
                    err: 'Error occured in resourcesController.listAllResources',
                    message: err
                }
            })
        });
}

resourcesController.upvoteResource = (req, res, next) => {
    const requestBody = req.body;
    const numVotes = requestBody.upvote ? 1 : -1;

    Resources.findOneAndUpdate({
        // link: requestBody.link,
        // teamId: requestBody._id,
        _id: requestBody._id,
    }, {
        votes: requestBody.votes + numVotes,
    },
        {
            returnNewDocument: true
        })
        .then(data => {
            res.locals.response = data;
            next();
        })
        .catch(err => {
            next({
                log: `Upvote Resources - ERROR: ${err}`,
                message: {
                    err: 'Error occured in resourcesController.upvoteResource',
                    message: err
                }
            })
        });
}

module.exports = resourcesController;