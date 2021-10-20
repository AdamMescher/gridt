const mongoose = require('mongoose');
const { composeMongoose } = require('graphql-compose-mongoose');

const stateSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  standard: { type: Number },
  postal: { type: Number },
});

const State = mongoose.model('State', stateSchema);
const StateTC = composeMongoose(State);

module.exports = { State, StateTC };
