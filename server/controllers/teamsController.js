const { Teams } = require('../models/TeamsModel');
const UsersModel = require('../models/UsersModel');

const teamsController = {};

teamsController.createTeam = (req, res, next) => {
    const requestBody = req.body;

    Teams.create({
        name: requestBody.name,
        categoriesList: requestBody.categoriesList,
        description: requestBody.description,
        profilePic: requestBody.profilePic,
        usersList: requestBody.usersList,
        usersCount: 1,
        resourcesList: [],
        resourcesCount: 0,
        adminsList: requestBody.adminsList,
    })
        .then(data => {
            res.locals.response = data;
            console.log('teamsController.createTeam:', 'team created')
            next();
        })
        .catch(err => {
            next({
                log: `Create Teams - ERROR: ${err}`,
                message: {
                    err: 'Error occured in teamsController.createTeam',
                    message: err
                }
            })
        });
}

teamsController.listTeams = (req, res, next) => {
    Teams.find({})
        .then(data => {
            res.locals.response = data;
            console.log("Data from the db --> ", data);
            console.log('teamsController.listTeams:', 'list found')
            next();
        })
        .catch(err => {
            next({
                log: `List Teams - ERROR: ${err}`,
                message: {
                    err: 'Error occured in teamsController.createTeam',
                    message: err
                }
            })
        });
}

teamsController.findTeam = (req, res, next) => {
    Teams.findOne({ "_id": req.params.id})
        .then(data => {
            res.locals.response = data;
            console.log('teamsController.listTeams:', 'team found')
            next();
        })
        .catch(err => {
            next({
                log: `List Teams - ERROR: ${err}`,
                message: {
                    err: 'Error occured in teamsController.findTeam',
                    message: err
                }
            })
        });
}


teamsController.listThreeTeams = (req, res, next) => {
    Teams.find({}, null, { limit: 3 })
        .then(data => {
            res.locals.response = data;
            console.log('teamsController.listThreeTeams:', '3 list found: ', res.locals.response)
            next();
        })
        .catch(err => {
            next({
                log: `List 3 Teams - ERROR: ${err}`,
                message: {
                    err: 'Error occured in teamsController.listThreeTeams',
                    message: err
                }
            })
        });
}

teamsController.joinTeam = async (req, res, next) => {
    const { id, teamsList } = req.body;
    const updatedUser = await UsersModel.findOneAndUpdate({ _id: id }, { teamsList }, {new: true})
    res.locals.user = updatedUser;
    return next();
}

teamsController.leaveTeam = async (req, res, next) => {
    const { id, teamsList } = req.body;
    const updatedUser = await UsersModel.findOneAndUpdate({ _id: id }, { teamsList }, {new: true})
    res.locals.user = updatedUser;
    return next();
}

teamsController.findUserTeams = async (req, res, next) => {
    const allTeamsArr = await Teams.find({});

    res.locals.allTeamsArr = allTeamsArr;
    return next();
}

module.exports = teamsController;