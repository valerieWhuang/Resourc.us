const { Resources, Comments } = require('../models/CommentsModel');
const commentsController = {};

commentsController.createComment = (req, res, next) => {
  const requestBody = req.body;
  console.log(req.body);
  Comments.create({
    message: requestBody.message,
    postedBy: requestBody.postedBy,
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



module.exports = commentsController;