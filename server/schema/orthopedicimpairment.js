const {
  OrthopedicimpairmentTC,
} = require('../models/orthopedicimpairment.model');

const OrthopedicimpairmentQuery = {
  orthopedicimpairment: OrthopedicimpairmentTC.mongooseResolvers.findOne(),
  orthopedicimpairments: OrthopedicimpairmentTC.mongooseResolvers.findMany(),
};

const OrthopedicimpairmentMutation = {};

module.exports = { OrthopedicimpairmentQuery, OrthopedicimpairmentMutation };
