const mongoose = require('mongoose');

const fighterSchema = new mongoose.Schema({
  name: {type: String, required: true},
  dob: {type: Date, required: true},
  height: {type: Number, required: true, default: 0},
  weight: {type: Number, required: true, default: 0},
  team: {type: String, required: true, default: 'N/A'},
  class: {type: String, required: true},
  record: {type: String, required: true, default: '0-0-0'}
});

const Fighter = mongoose.model('Fighter', fighterSchema);
module.exports = Fighter;
