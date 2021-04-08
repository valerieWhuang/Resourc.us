const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    link: { type: String, required: true },
    teamId: { type: String, required: true },
    votes: { type: Number, default: 0 },
    category: { type: String, required: true }
    // Add title, brief summary/description, comments(an array of comment ObjectIds)
    
    // Add a new collection called comments
    // fields --> author(userId), body
}, { timestamps: true });

var Resource = mongoose.model('Resource', resourceSchema);

module.exports = { Resource };