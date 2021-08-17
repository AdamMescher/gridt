const genders = require('./genders');
const Gender = require('../schemas/genderSchema');

const seedGenders = async () => {
  // eslint-disable-next-line no-console
  await Gender.deleteMany({});
  console.log('[1/6] SEEDING GENDERS');
  const allGenders = genders.map(
    ({ id, name, abbreviation }) => new Gender({ id, name, abbreviation }),
  );
  await Gender.insertMany(allGenders).catch((err) => console.error(err));
  // eslint-disable-next-line no-console
  console.log('[1/6] GENDERS SEEDED SUCCESSFULLY');
};

module.exports = seedGenders;
