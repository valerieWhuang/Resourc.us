const bcrypt = require('bcrypt');
const { Users } = require('../models/UsersModel');

const usersController = {};

usersController.createUser = (req, res, next) => {
  next();
//   const requestBody = req.body;
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
  Users.findOne({ emailAdress: requestBody.emailAdress }).exec()
    .then((data) => {
      bcrypt.compare(requestBody.password, data.hash, (err, result) => {
        if (result === true) {
          next();
        } else {
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
