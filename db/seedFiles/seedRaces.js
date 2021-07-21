const races = require("./races");
const Race = require('../schemas/raceSchema');

const seedRaces = async (collection) => {
  for (let i = 0; i < races.length; i++) {
    const race = new Race(races[i]);
    await collection.insertOne(race);
  }
};

module.exports = seedRaces;
