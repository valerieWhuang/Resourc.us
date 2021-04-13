const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UsersModel = require('../models/UsersModel');

passport.use(
  'signup',
  new LocalStrategy(
    {
      usernameField: 'emailAddress',
      passwordField: 'password',
      passReqToCallback: true,
    },
    // eslint-disable-next-line consistent-return
    async (req, emailAddress, password, done) => {
      console.log('hello! about to create user!', emailAddress, password, req.body.firstName, req.body.lastName);
      try {
        const user = await UsersModel.create({
          emailAddress,
          password,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          teamsList: [],
        });
        console.log('after creation', user);
        return done(null, user);
      } catch (error) {
        console.log(error);
        done(error);
      }
    },
  ),
);

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'emailAddress',
      passwordField: 'password',
    },
    async (emailAddress, password, done) => {
      try {
        const user = await UsersModel.findOne({ emailAddress });
        if (!user) {
          return done(null, false, { message: 'User not found!' });
        }

        const validate = await user.isValidPassword(password);
        if (!validate) {
          return done(null, false, { message: 'Wrong password!' });
        }

        return done(null, user, { message: 'Logged in Successfully!' });
      } catch (error) {
        return done(error);
      }
    },
  ),
);
