const states = require('./states');
const State = require('../schemas/stateSchema');

const seedStates = async (collection) => {
  // eslint-disable-next-line no-console
  console.log('[4/6] SEEDING STATES');
  const allStates = states.map(async ({ id, name, standard, postal }) => {
    State({
      id,
      name,
      standard,
      postal,
    });
  });
  await collection.insertMany(allStates);
  // eslint-disable-next-line no-console
  console.log('[4/6] ALL STATES SEEDED SUCCESSFULLY');
};

module.exports = seedStates;
