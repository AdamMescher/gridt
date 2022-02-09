const {
  IntellectualdisabilityTC,
} = require('../models/intellectualdisability.model');

const IntellectualdisabilityQuery = {
  intellectualdisability: IntellectualdisabilityTC.mongooseResolvers.findOne(),
  intellectualdisabilities:
    IntellectualdisabilityTC.mongooseResolvers.findMany(),
};

const IntellectualdisabilityMutation = {};

module.exports = {
  IntellectualdisabilityQuery,
  IntellectualdisabilityMutation,
};
