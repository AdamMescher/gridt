const races = require('./races');
const Race = require('../schemas/raceSchema');

const seedRaces = async () => {
  // eslint-disable-next-line no-console
  await Race.deleteMany({});
  console.log('[2/6] SEEDING RACES');
  const allRaces = races.map(
    ({ id, name, abbreviation }) =>
      new Race({
        id,
        name,
        abbreviation,
      }),
  );
  await Race.insertMany(allRaces).catch((err) => console.error(err));
  // eslint-disable-next-line no-console
  console.log('[2/6] ALL RACES SEEDED SUCCESSFULLY');
};

module.exports = seedRaces;
