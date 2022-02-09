const {
  OtherhealthimpairmentTC,
} = require('../models/otherhealthimpairment.model');

const OtherhealthimpairmentQuery = {
  otherhealthimpairment: OtherhealthimpairmentTC.mongooseResolvers.findOne(),
  otherhealthimpairments: OtherhealthimpairmentTC.mongooseResolvers.findMany(),
};

const OtherhealthimpairmentMutation = {};

module.exports = { OtherhealthimpairmentQuery, OtherhealthimpairmentMutation };
