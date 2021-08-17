const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  standard: { type: Number },
  postal: { type: Number },
});

const State = mongoose.model('State', stateSchema);

module.exports = State;
