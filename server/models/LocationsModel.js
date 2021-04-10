const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationsSchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
}, { timestamps: true });

var Locations = mongoose.model('Locations', LocationsSchema);
module.exports = { Locations };