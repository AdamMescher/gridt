const { RaceTC } = require('../resources/races/race.model');

const RaceQuery = {
  race: RaceTC.mongooseResolvers.findOne(),
  races: RaceTC.mongooseResolvers.findMany(),
};
const RaceMutation = {};

module.exports = { RaceQuery, RaceMutation };
