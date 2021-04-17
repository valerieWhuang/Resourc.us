const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const router = express.Router();

router.get('/list',
  categoriesController.listAllCategories,
  (req, res) => {
    res.status(200).json(res.locals.response);
  }
);

module.exports = router;