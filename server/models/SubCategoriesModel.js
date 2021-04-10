const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubCategoriesSchema = new Schema({
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

var SubCategories = mongoose.model('SubCategories', SubCategoriesSchema);
module.exports = { SubCategories };