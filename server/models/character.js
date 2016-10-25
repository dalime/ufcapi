const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: {type: String, required: true},
  group: {type: String, required: true},
  status: {type: String, required: true, default: 'dead'},
  zombiesKilled: {type: Number, required: true, default: 0},
  humansKilled: {type: Number, required: true, default: 0}
});

const Character = mongoose.model('Character', characterSchema);
module.exports = Character;
