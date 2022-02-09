const {
  SpeechlanguageimpairmentTC,
} = require('../models/speechlanguageimpairment.model');

const SpeechlanguageimpairmentQuery = {
  speechlanguageimpairment:
    SpeechlanguageimpairmentTC.mongooseResolvers.findOne(),
  speechlanguageimpairments:
    SpeechlanguageimpairmentTC.mongooseResolvers.findMany(),
};

const SpeechlanguageimpairmentMutation = {};

module.exports = {
  SpeechlanguageimpairmentQuery,
  SpeechlanguageimpairmentMutation,
};
