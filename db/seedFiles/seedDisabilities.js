const disabilities = require("./disabilities");
const Disability = require("../schemas/disabilitySchema");

const seedDisabilities = async (collection) => {
  for (let i = 0; i < disabilities.length; i++) {
    const disability = new Disability(disabilities[i]);
    await collection.insertOne(disability);
  }
};

module.exports = seedDisabilities;
