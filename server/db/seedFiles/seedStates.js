const states = require('./states');
const State = require('../schemas/stateSchema');

const seedStates = async (collection) => {
  const allStates = states.map(
    ({ name, standard, postal }) =>
      new State({
        name,
        standard,
        postal,
      }),
  );
  await collection.insertMany(allStates);
};

module.exports = seedStates;
