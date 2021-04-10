const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  subCategories: [{
    type: Schema.Types.ObjectId, 
    ref: 'SubCategories'
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
}, { timestamps: true });

var Resources = mongoose.model('Resources', ResourcesSchema);
module.exports = { Resources };