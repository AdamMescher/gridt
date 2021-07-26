const states = require("./states");
const State = require("../schemas/stateSchema");

const seedStates = async (collection) => {
  for (let i = 0; i < states.length; i++) {
    await collection.insertOne(new State(states[i]));
  }
};

module.exports = seedStates;
