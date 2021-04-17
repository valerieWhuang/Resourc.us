const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const options = {
  timestamps: true, 
  createdAt: "created_at", 
  updatedAt: "updated_at"
};

const TeamsSchema = new Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
  },
  categoriesList: [{
    type: Schema.Types.ObjectId, 
    ref: 'categories'
  }],
  description: { type: String },
  profilePic: { type: String },
  usersList: [{
    type: Schema.Types.ObjectId, 
    ref: 'Users'
  }],
  usersCount: { type: Number }, 
  resourcesList: [{
    type: Schema.Types.ObjectId, 
    ref: 'Resources'
  }],
  resourcesCount: { type: Number },
  adminsList: [{
    type: Schema.Types.ObjectId, 
    ref: 'Users'
  }]
}, options);

var Teams = mongoose.model('teams', TeamsSchema);
module.exports = { Teams };