const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const options = {
  timestamps: true, 
  createdAt: "created_at", 
  updatedAt: "updated_at"
};

const CommentsSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  postedBy: {
    type: Schema.Types.ObjectId, 
    ref: 'users',
    required: true
  },
  resourceId: {
    type: Schema.Types.ObjectId, 
    ref: 'Resources',
    required: true
  }
}, options);

var Comments = mongoose.model('comments', CommentsSchema);
module.exports = { Comments };