const mongoose = require('mongoose');

const fighterSchema = new mongoose.Schema({
  name: {type: String, required: true},
  dob: {type: Date, required: true},
  height: {type: Number, required: true, default: 0},
  weight: {type: Number, required: true, default: 0},
  teams: [{type: mongoose.Schema.Types.ObjectId, ref: 'Team'}],
  class: {type: String, required: true},
  wins: [{type: mongoose.Schema.Types.ObjectId, ref: 'Fighter'}],
  losses: [{type: mongoose.Schema.Types.ObjectId, ref: 'Fighter'}],
  draws: [{type: mongoose.Schema.Types.ObjectId, ref: 'Fighter'}],
  events: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}]
});

const Fighter = mongoose.model('Fighter', fighterSchema);
module.exports = Fighter;
