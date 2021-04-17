const express = require('express');
const teamsController = require('../controllers/teamsController');
const router = express.Router();

router.get('/list',
    teamsController.listTeams,
    (req, res) => {
        res.status(200).json(res.locals.response);
    }
);

router.get('/list/:id',
    teamsController.findTeam,
    (req, res) => {
        res.status(200).json(res.locals.response);
    }
);

router.get('/listThree',
    teamsController.listThreeTeams,
    (req, res) => {
        res.status(200).json(res.locals.response);
    }
);

router.post('/create',
    teamsController.createTeam,
    (req, res) => {
        res.status(200).json(res.locals.response);
    }
);

router.post('/join',
    teamsController.joinTeam,
    (req, res) => {
        console.log('team has been added to user\'s teamsList!');
        console.log(res.locals.user.teamsList);
        res.status(200).json(res.locals.user);
    }
);

router.patch('/leave',
    teamsController.joinTeam,
    (req, res) => {
        console.log('team has been removed to user\'s teamsList!');
        console.log(res.locals.user.teamsList);
        res.status(200).json(res.locals.user);
    }
);

router.get('/joinedList',
    teamsController.findUserTeams,
    (req, res) => {
        console.log('I have fetched all teams!')
        console.log(res.locals.allTeamsArr)
        res.status(200).json(res.locals.allTeamsArr)
    }
)

module.exports = router;