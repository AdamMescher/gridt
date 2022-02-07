const { DevelopmentaldelayTC } = require('../models/developmentaldelay.model');

const DevelopmentaldelayQuery = {
  developmentaldelay: DevelopmentaldelayTC.mongooseResolvers.findOne(),
  developmentaldelays: DevelopmentaldelayTC.mongooseResolvers.findMany(),
};

const DevelopmentaldelayMutation = {};

module.exports = { DevelopmentaldelayQuery, DevelopmentaldelayMutation };
