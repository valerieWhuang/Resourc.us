const express = require('express');
const router = express.Router();

const resourcesController = require('../controllers/resourcesController');
const tagsController = require('../controllers/tagsController');
const teamsController = require('../controllers/teamsController');

router.post('/create',
    resourcesController.createResource,
    tagsController.incrementTagCount,
    teamsController.addResourceToTeam,
    (req, res) => {
        res.status(200).json(res.locals.response);
    }
);

router.post('/list',
    resourcesController.listResources,
    (req, res) => {
        res.status(200).json(res.locals.response);
    }
);

router.post('/listThree',
    resourcesController.listThreeResources,
    (req, res) => {
        res.status(200).json(res.locals.response);
    }
);

router.get('/listAll',
    resourcesController.listAllResources,
    (req, res) => {
        res.status(200).json(res.locals.response);
    }
);

router.post('/upvote',
    resourcesController.upvoteResource,
    (req, res) => {
        res.status(200).json(res.locals.response);
    }
);

module.exports = router;