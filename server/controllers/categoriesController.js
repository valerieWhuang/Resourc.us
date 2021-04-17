const { Categories } = require('../models/CategoriesModel');
const categoriesController = {};

categoriesController.listAllCategories = (req, res, next) => {
  Categories.find({})
    .populate('tags')
    .exec()
    .then(data => {
      res.locals.response = data;
      next();
    })
    .catch(err => {
      next({
        log: `List All Categories - ERROR: ${err}`,
        message: {
            err: 'Error occured in categoriesController.listAllCategories',
            message: err
        }
      })
    })
}
module.exports = categoriesController;