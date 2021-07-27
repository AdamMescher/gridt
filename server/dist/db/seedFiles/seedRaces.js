"use strict";

const races = require("./races");

const Race = require('../schemas/raceSchema');

const seedRaces = async collection => {
  for (let i = 0; i < races.length; i++) {
    await collection.insertOne(new Race(races[i]));
  }
};

module.exports = seedRaces;