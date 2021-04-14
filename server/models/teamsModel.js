const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const options = {
  timestamps: true, 
  createdAt: "created_at", 
  updatedAt: "updated_at"
};

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

// var Team = mongoose.model('Team', teamSchema);
var Teams = mongoose.model('teams', TeamsSchema);
module.exports = { Teams };