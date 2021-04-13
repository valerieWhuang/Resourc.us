/* eslint-disable no-unused-vars */
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const usersController = require('../controllers/usersController');

const router = express.Router();

// router.post('/signup', usersController.createUser,
//   passport.authenticate('signup', { session: false }),
//   async (req, res) => {
//     console.log('login User router is working');
//     res.status(200).json({ message: 'success', user: req.user });
//   });

router.post(
  '/signup',
  (req, res, next) => {
    console.log('here', req.body);
    next();
  },
  usersController.createUser,
  passport.authenticate('signup', { session: false }),
  async (req, res, next) => {
    try {
      console.log('login User router is working');
      res.status(200).json({ message: 'success', user: req.user });
    } catch (error) {
      console.log(error);
    }
  },
);

router.post('/login',
  async (req, res, next) => {
    passport.authenticate(
      'login',
      // eslint-disable-next-line consistent-return
      async (err, user, info) => {
        try {
          if (err || !user) {
            const error = new Error('An erro occured');
            return next(error);
          }

          req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);

              // eslint-disable-next-line no-underscore-dangle
              const body = { _id: user._id, emailAddress: user.emailAddress };
              const token = jwt.sign({ user: body }, 'TOP_SECRET');

              return res.status(200).json({ token, user });
            },
          );
        } catch (error) {
          return next(error);
        }
      },
    )(req, res, next);
  });

module.exports = router;
