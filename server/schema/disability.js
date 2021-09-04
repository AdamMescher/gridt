const { DisabilityTC } = require('../resources/disabilities/disability.model');

const DisabilityQuery = {
  disability: DisabilityTC.mongooseResolvers.findOne(),
  disabilities: DisabilityTC.mongooseResolvers.findMany(),
};

const DisabilittyMutation = {};

module.exports = { DisabilityQuery, DisabilittyMutation };
