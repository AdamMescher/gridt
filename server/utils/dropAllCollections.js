const mongoose = require('mongoose');

const dropAllCollections = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  collections.forEach(async (collection) => {
    try {
      await collection.drop();
    } catch (error) {
      if (error.message === 'ns not found') return;
      if (error.message.includes('a background operation is currently running'))
        // eslint-disable-next-line no-useless-return
        return;
      console.log(error);
    }
  });
};

module.exports = dropAllCollections;
