const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  postedBy: {
    type: Schema.Types.ObjectId, 
    ref: 'Users'
  },
}, { timestamps: true });

var Comments = mongoose.model('Comments', CommentsSchema);
module.exports = { Comments };