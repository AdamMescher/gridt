const genders = require('./genders');
const Gender = require('../schemas/genderSchema');

const seedGenders = async (collection) => {
  // eslint-disable-next-line no-console
  console.log('[1/6] SEEDING GENDERS');
  const allGenders = genders.map(
    ({ id, name, abbreviation }) => new Gender({ id, name, abbreviation }),
  );
  await collection.insertMany(allGenders);
  // eslint-disable-next-line no-console
  console.log('[1/6] GENDERS SEEDED SUCCESSFULLY');
};

module.exports = seedGenders;
