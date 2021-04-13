const express = require('express');
const { ModuleFilenameHelpers } = require('webpack');
const commentsController = require('../controllers/commentsController');
const router = express.Router();

router.post('/create',
  commentsController.createComment,
  (req, res) => {
    console.log('create comment router is working');
    console.log(res.locals.response);
    res.status(200).json(res.locals.response);
  }
);

router.get('/list', 
  commentsController.listAllComments,
  (req, res) => {
    console.log('list comments route is working');
    console.log(res.locals.respose);
    res.status(200).json(res.locals.response);
  }
)


module.exports = router;