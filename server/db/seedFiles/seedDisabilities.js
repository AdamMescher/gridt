const disabilities = require('./disabilities');
const Disability = require('../schemas/disabilitySchema');

const seedDisabilities = async (collection) => {
  const allDisabilities = disabilities.map(
    ({ id, name, abbreviation }) =>
      new Disability({
        id,
        name,
        abbreviation,
      }),
  );
  await collection.insertMany(allDisabilities);
};

module.exports = seedDisabilities;
