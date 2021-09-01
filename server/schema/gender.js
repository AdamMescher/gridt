const { GenderTC } = require('../resources/genders/gender.model');

const GenderQuery = {
  gender: GenderTC.mongooseResolvers.findOne(),
  genders: GenderTC.mongooseResolvers.findMany(),
};

const GenderMutation = {};

module.exports = { GenderQuery, GenderMutation };
