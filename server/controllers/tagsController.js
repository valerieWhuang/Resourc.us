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

tagsController.incrementTagCount = (req, res, next) => {
  console.log('inside tagsController.incrementTagCount:', res.locals.response)
  const tagIDs = res.locals.response.tags 

  // select all the documents that match a value in the tagIDs array
  Tags.find({ '_id': { $in: tagIDs } })
    .then(records => {
      // update and save each document
      records.forEach(record => {
        console.log('tag record: ', record)
        Tags.findByIdAndUpdate(record._id, {mentionCount: record.mentionCount + 1}, (err, result) => {
          err ? res.send(err) : console.log('tag count update result:', result)  
        })
      })
      return next()
    })
    .catch (err => {
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