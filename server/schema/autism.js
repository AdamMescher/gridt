const { AutismTC } = require('../models/autism.model');

const AutismQuery = {
  autism: AutismTC.mongooseResolvers.findOne(),
  autisms: AutismTC.mongooseResolvers.findMany(),
};

const AutismMutation = {};

module.exports = { AutismQuery, AutismMutation };
