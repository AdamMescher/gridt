const { DeafblindnessTC } = require('../models/deafblindness.model');

const DeafBlindnessQuery = {
  deafblindness: DeafblindnessTC.mongooseResolvers.findOne(),
  deafblindnesses: DeafblindnessTC.mongooseResolvers.findMany(),
};

const DeafBlindnessMutation = {};

module.exports = { DeafBlindnessQuery, DeafBlindnessMutation };
