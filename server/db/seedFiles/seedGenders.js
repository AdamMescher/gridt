const genders = require('./genders');
const Gender = require('../schemas/genderSchema');

const seedGenders = async (collection) => {
  const allGenders = genders.map(
    ({ id, name, abbreviation }) => new Gender({ id, name, abbreviation }),
  );
  await collection.insertMany(allGenders);
};

module.exports = seedGenders;
