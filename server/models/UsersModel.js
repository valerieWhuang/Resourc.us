const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({ // userSchema
	firstName: { 
		type: String, 
    required: [true, "can't be blank"] 
  }, // firstname
	lastName: { 
		type: String, 
    required: [true, "can't be blank"] 
  },	// lastname
	emailAddress: { 
    type: String, 
    required: [true, "can't be blank"], 
    unique: true, 
    index: true 
  }, // email
  googleId: {
    type: String,
  },
  teamsList: [{
    type: Schema.Types.ObjectId, 
    ref: 'Teams'
  }],
	hash: { 
    type: String, 
    // required: [true, "can't be blank"], 
    // min: [8, 'Not enough characters'] 
  }
}, { timestamps: true });

const saltRounds = 10;
userSchema.pre('save', function (next) {
	const user = this;
	if (!user.isModified('hash')) return next();
	bcrypt.genSalt(saltRounds, function (err, salt) {
		if (err) return next(err);
		bcrypt.hash(user.hash, saltRounds, function (err, hash) {
			if (err) return next(err);
			user.hash = hash;
			next()
		});
	});
});


var Users = mongoose.model('Users', UsersSchema);
module.exports = { Users };