const mongoose = require('mongoose');
const updateSchoolsWithDisabilityData = require('./seedFiles/updateSchoolsWithDisabilityData');

const url = 'mongodb://localhost/gridt';
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
const connection = mongoose.connect(url, options);

const seedDb = async () => {
  try {
    await updateSchoolsWithDisabilityData();
  } catch (error) {
    console.log(error.stack);
  }
};

seedDb();
