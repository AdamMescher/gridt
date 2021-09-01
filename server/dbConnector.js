const mongoose = require('mongoose');

const MONGO_URL = 'mongodb://localhost/gridt';

// 2
module.exports = async () => {
  const path = MONGO_URL;
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: false,
  };
  await mongoose.connect(path, options);
  const db = mongoose.connection;
  return { Genders: db.collection('genders') };
};
