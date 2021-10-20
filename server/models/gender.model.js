const mongoose = require('mongoose');
const { composeMongoose } = require('graphql-compose-mongoose');

const genderSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true, immutable: true },
  name: { type: String, required: true },
  abbreviation: { type: String, required: true },
});

const Gender = mongoose.model('Gender', genderSchema);
const GenderTC = composeMongoose(Gender);

module.exports = { Gender, GenderTC };
