const genders = require("./genders");
const Gender = require("../schemas/genderSchema");

const seedGenders = async (collection) => {
  for (let i = 0; i < genders.length; i++) {
    await collection.insertOne(new Gender(genders[i]));
  }
};

module.exports = seedGenders;
