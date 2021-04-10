const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamsSchema = new Schema({ // teamSchema
  name: { 
    type: String, 
    required: true, 
    unique: true 
  },
  categoriesList: [{
    type: Schema.Types.ObjectId, 
    ref: 'Categories'
  }], // category: { type: String, required: true },
  description: { type: String },
  profilePic: { type: String }, // image
  userList: [{
    type: Schema.Types.ObjectId, 
    ref: 'Users'
  }],
  userCount: { type: Number }, 
  resourcesList: [{
    type: Schema.Types.ObjectId, 
    ref: 'Resources'
  }],
  resourceCount: { type: Number },
  adminsList: [{
    type: Schema.Types.ObjectId, 
    ref: 'Users'
  }]
}, { timestamps: true });

// var Team = mongoose.model('Team', teamSchema);
var Teams = mongoose.model('Teams', TeamsSchema);
module.exports = { Teams };