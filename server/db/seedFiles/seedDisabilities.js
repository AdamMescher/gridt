const disabilities = require("./disabilities");
const Disability = require("../schemas/disabilitySchema");

const seedDisabilities = async (collection) => {
  for (let i = 0; i < disabilities.length; i++) {
    await collection.insertOne(new Disability(disabilities[i]));
  }
};

module.exports = seedDisabilities;
