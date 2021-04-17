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
  passport.authenticate('signup', { session: false }),
  async (req, res, next) => {
    try {
      res.status(200).json(req.user);
    } catch (error) {
      console.log(error);
    }
  },
);

router.post(
  '/login',
  passport.authenticate('login', { session: false }),
  async (req, res, next) => {
    try {
      res.status(200).json(req.user);
    } catch (error) {
      console.log(error);
    }
  },
);

module.exports = router;
