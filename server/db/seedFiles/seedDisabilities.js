const disabilities = require('./disabilities');
const Disability = require('../schemas/disabilitySchema');

const seedDisabilities = async () => {
  await Disability.deleteMany({});
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
  await Disability.insertMany(allDisabilities);
  // eslint-disable-next-line no-console
  console.log('[3/6] ALL DISABILITIES SEEDED SUCCESSFULLY');
};

module.exports = seedDisabilities;
