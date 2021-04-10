const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
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
}, { timestamps: true });

var Categories = mongoose.model('Categories', CategoriesSchema);
module.exports = { Categories };