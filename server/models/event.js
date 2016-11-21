const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {type: String, required: true},
  city: {type: String, required: true},
  country: {type: String, required: true},
  date: {type: Date, required: true}
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
