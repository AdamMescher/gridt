const genders = require('./genders');
const Gender = require('../schemas/genderSchema');

const seedGenders = async (collection) => {
  for (let i = 0; i < genders.length; i++) {
    const gender = new Gender(genders[i]);
    await collection.insertOne(gender);
  }
};

module.exports = seedGenders;
