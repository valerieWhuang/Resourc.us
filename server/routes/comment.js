const express = require('express');
const commentsController = require('../controllers/commentsController');
const router = express.Router();

router.post('/create',
  commentsController.createComment,
  (req, res) => {
    res.status(200).json(res.locals.response);
  }
);

router.get('/list', 
  commentsController.listAllComments,
  (req, res) => {
    res.status(200).json(res.locals.response);
  }
)

router.post('/edit',
  commentsController.editComment,
  (req, res) => {
    res.status(200).json(res.locals.response);
  }
)

router.post('/delete', 
  commentsController.deleteComment, (req, res) => {
  res.status(200).json(res.locals.response);
});


module.exports = router;