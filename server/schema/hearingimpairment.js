const { HearingimpairmentTC } = require('../models/hearingimpairment.model');

const HearingimpairmentQuery = {
  hearingimpairment: HearingimpairmentTC.mongooseResolvers.findOne(),
  hearingimpairments: HearingimpairmentTC.mongooseResolvers.findMany(),
};

const HearingimpairmentMutation = {};

module.exports = { HearingimpairmentQuery, HearingimpairmentMutation };
