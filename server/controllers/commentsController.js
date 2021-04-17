const { Resources, Comments } = require('../models/CommentsModel');
const commentsController = {};

commentsController.createComment = (req, res, next) => {
  const requestBody = req.body;
  console.log(req.body);
  Comments.create({
    message: requestBody.message,
    postedBy: requestBody.postedBy,
    resourceId: requestBody.resourceId
  })
    .then(data => {
      res.locals.response = data;
      console.log('commentsController');
      next();
    })
    .catch(err => {
      next({
        log: `Create Comments - ERROR: ${err}`,
        message: {
          err: 'Error occured in commentsController.createComment',
          message: err,
        }
      })
    });
};

commentsController.listAllComments = (req, res, next) => {
  Comments.find({}) 
    .then(data => {
      res.locals.response = data;
      console.log('commentsController.listAllComments:', 'all comments listed')
      next();
    })
    .catch(err => {
      next({
        log: `List All Comments - ERROR: ${err}`,
        message: {
          err: 'Error occured in commentsController.listAllComments',
          message: err
        }
      })
    })
}


commentsController.editComment = (req, res, next) => {
  const requestBody = req.body;
  Comments.findOneAndUpdate({
    _id: requestBody._id,
  }, {
    message: requestBody.message,
  }, {
    returnNewDocument: true
  })
    .then((data) => {
      res.locals.response = data;
      console.log('commentsController.editComments:', 'comment edited');
      next();
    })
    .catch((err) => {
      next({
        log: `Edit Comment - ERROR: ${err}`,
        message: {
          err: 'Error occured in commentsController.editComments',
          message: err,
        },
      });
    });
};

commentsController.deleteComment = (req, res, next) => {
  const requestBody = req.body;
  Comments.findByIdAndDelete({
    _id: requestBody._id,
  })
    .then((data) => {
      res.locals.response = data;
      console.log('commentsController.deleteComment:', 'comment deleted');
      next();
    })
    .catch((err) => {
      next({
        log: `Delete Comment - ERROR: ${err}`,
        message: {
          err: 'Error occured in commentsController.deleteComment',
          message: err,
        },
      });
    });
};



module.exports = commentsController;