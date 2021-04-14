const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const options = {
  timestamps: true, 
  createdAt: "created_at", 
  updatedAt: "updated_at"
};

const TagsSchema = new Schema({
  name: {
    type: String, 
    required: true,
    unique: true,  
  },
  mentionCount: {
    type: Number, 
    required: true,
    default: 0 
  }
}, options);

var Tags = mongoose.model('tags', TagsSchema);
module.exports = { Tags };