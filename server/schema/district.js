const { DistrictTC } = require('../resources/districts/district.model');

const DistrictQuery = {
  district: DistrictTC.mongooseResolvers.findOne(),
  districts: DistrictTC.mongooseResolvers.findMany(),
};

const DistrictMutation = {};

module.exports = { DistrictQuery, DistrictMutation };
