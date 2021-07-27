const races = require('./races');
const Race = require('../schemas/raceSchema');

const seedRaces = async (collection) => {
  const allRaces = races.map(
    ({ id, name, abbreviation }) =>
      new Race({
        id,
        name,
        abbreviation,
      }),
  );
  await collection.insertMany(allRaces);
};

export default seedRaces;
