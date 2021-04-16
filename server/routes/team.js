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

module.exports = router;