const { VisualimpairmentTC } = require('../models/visualimpairment.model');

const VisualimpairmentQuery = {
  visualimpairment: VisualimpairmentTC.mongooseResolvers.findOne(),
  visualimpairments: VisualimpairmentTC.mongooseResolvers.findMany(),
};

const VisualimpairmentMutate = {};

module.exports = { VisualimpairmentQuery, VisualimpairmentMutate };
