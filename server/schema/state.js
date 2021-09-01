const { StateTC } = require('../resources/states/state.model');

const StateQuery = {
  state: StateTC.mongooseResolvers.findOne(),
  states: StateTC.mongooseResolvers.findMany(),
};

const StateMutation = {};

module.exports = { StateQuery, StateMutation };
