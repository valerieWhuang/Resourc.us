const bcrypt = require('bcrypt');
const { Users } = require('../models/UsersModel');

const usersController = {};

usersController.createUser = (req, res, next) => {
  console.log(req.body);
  next();
//   const requestBody = req.body;
//   console.log('usersController.createUser:', 'reached controller');
//   // User.create({
//   // email: requestBody.email,
//   // hash: requestBody.password,
//   // firstname: requestBody.firstname,
//   // lastname: requestBody.lastname,
//   // })
//   Users.create({
//     emailAddress: requestBody.emailAddress,
//     hash: requestBody.password,
//     firstName: requestBody.firstName,
//     lastName: requestBody.lastName,
//   })
//     .then((data) => {
//       res.locals.response = data;
//       console.log('usersController.createUser:', data);
//       next();
//     })
//     .catch((err) => {
//       next({
//         log: `createUser - ERROR: ${err}`,
//         message: {
//           err: 'Error occured in usersController.createUser',
//           message: err,
//         },
//       });
//     });
};

usersController.validateUser = (req, res, next) => {
  const requestBody = req.body;
  console.log('usersController.validateUser:', 'reached controller');
  Users.findOne({ emailAdress: requestBody.emailAdress }).exec()
    .then((data) => {
      bcrypt.compare(requestBody.password, data.hash, (err, result) => {
        if (result === true) {
          console.log('usersController.validateUser:', 'Password comparison is a match');
          next();
        } else {
        // console.log('usersController.validateUser:', 'Password doesnt match');
          next({
            log: 'validateUser - ERROR: Password doesn\'t match',
            message: {
              err: 'Error occured in usersController.bcrypt',
              message: 'Password does not match',
            },
          });
        }
      });
    })
    .catch((err) => {
      next({
        log: `validateUser - ERROR: ${err}`,
        message: {
          err: 'Error occured in usersController.validateUser',
          message: err,
        },
      });
    });
};

module.exports = usersController;
