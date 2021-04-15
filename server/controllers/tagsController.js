const { Tags } = require('../models/TagsModel');
const tagsController = {};

tagsController.createTag = (req, res, next) => {
  const requestBody = req.body;

  Tags.create({
    name: requestBody.name,
    mentionCount: 0
  })
  .then(data => {
    res.locals.response = data;
    console.log('tagsController.createTag', 'tag created')
    next()
  })
  .catch(err => {
    next({
      log: `Create Tag - ERROR: ${err}`,
        message: {
          err: 'Error occured in tagsController.createTag',
          message: err
        }
    })
  })
}

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