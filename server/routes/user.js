const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

router.post('/login',
    usersController.validateUser,
    (req, res) => {
        console.log('login User router is working');
        res.status(200).json({});
    }
);

router.post('/',
    usersController.createUser,
    (req, res) => {
        console.log('login User router is working');
        console.log(res.locals.response);
        res.status(200).json(res.locals.response);
    }
);

module.exports = router;