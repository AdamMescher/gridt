const disabilities = require('./disabilities');
const Disability = require('../schemas/disabilitySchema');

const seedDisabilities = async (collection) => {
  // eslint-disable-next-line no-console
  console.log('[3/6] SEEDING DISABILITIES');
  const allDisabilities = disabilities.map(
    ({ id, name, abbreviation }) =>
      new Disability({
        id,
        name,
        abbreviation,
      }),
  );
  await collection.insertMany(allDisabilities);
  // eslint-disable-next-line no-console
  console.log('[3/6] ALL DISABILITIES SEEDED SUCCESSFULLY');
};

module.exports = seedDisabilities;
