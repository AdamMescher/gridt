const { RaceTC } = require('../models/race.model');

const RaceQuery = {
  race: RaceTC.mongooseResolvers.findOne(),
  races: RaceTC.mongooseResolvers.findMany(),
};
const RaceMutation = {};

module.exports = { RaceQuery, RaceMutation };
