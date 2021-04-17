const express = require('express');
const tagsController = require('../controllers/tagsController');
const router = express.Router();

router.post('/create',
  tagsController.createTag,
  (req, res) => {
    res.status(200).json(res.locals.response);
  }
);

router.get('/list',
  tagsController.listAllTags,
  (req, res) => {
    res.status(200).json(res.locals.response);
  }
);

module.exports = router;