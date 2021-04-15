const { Tags } = require('../models/TagsModel');
const tagsController = {};

tagsController.listAllTags = (req, res, next) => {
  Tags.find({})
    .then(data => {
      res.locals.response = data;
      console.log('tagsController.listAllTags:', 'all tags listed')
      next();
    })
    .catch(err => {
      next({
        log: `List All Tags - ERROR: ${err}`,
        message: {
            err: 'Error occured in tagsController.listAllTags',
            message: err
        }
      })
    })
}

module.exports = tagsController;