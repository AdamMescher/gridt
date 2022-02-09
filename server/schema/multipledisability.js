const { MultipledisabilityTC } = require('../models/multipledisability');

const MultipledisabilitiesQuery = {
  multipledisability: MultipledisabilityTC.mongooseResolvers.findOne(),
  multipledisabilities: MultipledisabilityTC.mongooseResolvers.findMany(),
};

const MultipledisabilitiesMutation = {};

module.exports = {
  MultipledisabilitiesQuery,
  MultipledisabilitiesMutation,
};
