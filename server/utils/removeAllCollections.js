const mongoose = require('mongoose');

const removeAllCollections = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  collections.forEach(async (collection) => {
    await collection.deleteMany();
  });
};

module.exports = removeAllCollections;
