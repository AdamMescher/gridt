const {
  SpecificlearningdisabilityTC,
} = require('../models/specificlearningdisability.model');

const SpecificlearningdisabilityQuery = {
  specificlearningdisability:
    SpecificlearningdisabilityTC.mongooseResolvers.findOne(),
  specificlearningdisabilities:
    SpecificlearningdisabilityTC.mongooseResolvers.findMany(),
};

const SpecificlearningdisabilityMutation = {};

module.exports = {
  SpecificlearningdisabilityQuery,
  SpecificlearningdisabilityMutation,
};
