const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const options = {
  timestamps: true, 
  createdAt: "created_at", 
  updatedAt: "updated_at"
};

const ResourcesSchema = new Schema({ // resourceSchema
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String }
  ,
  link: { 
    type: String, 
    required: true 
  },
  // teamId: { type: String, required: true },
  team: {
    type: Schema.Types.ObjectId, 
    ref: 'Teams'
  },
  votes: { 
    type: Number, 
    default: 0 
  },
  // category: { type: String, required: true }
  tags: [{
    type: Schema.Types.ObjectId, 
    ref: 'Tags'
  }],
  commentsList: [{
    type: Schema.Types.ObjectId, 
    ref: 'Comments'
  }],
  postedBy: {
    type: Schema.Types.ObjectId, 
    ref: 'Users'
  },
  relatedLocation: {
    type: Schema.Types.ObjectId, 
    ref: 'Locations'
  }
}, options);

var Resources = mongoose.model('resources', ResourcesSchema);
module.exports = { Resources };