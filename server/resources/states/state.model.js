const mongoose = require('mongoose');
const MongoPaging = require('mongo-cursor-pagination');

const stateSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  standard: { type: Number },
  postal: { type: Number },
});

stateSchema.plugin(MongoPaging.mongoosePlugin);
const State = mongoose.model('State', stateSchema);

module.exports = State;
