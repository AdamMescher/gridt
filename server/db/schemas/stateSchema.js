const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  standard: { type: Number, required: true, unique: true },
  postal: { type: Number, required: true, unique: true },
});

const State = mongoose.model('State', stateSchema);

module.exports = State;
