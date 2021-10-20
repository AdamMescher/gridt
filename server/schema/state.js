const { StateTC } = require('../models/state.model');

const StateQuery = {
  state: StateTC.mongooseResolvers.findOne(),
  states: StateTC.mongooseResolvers.findMany(),
};

const StateMutation = {};

module.exports = { StateQuery, StateMutation };
