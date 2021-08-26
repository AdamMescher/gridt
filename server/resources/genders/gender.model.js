const mongoose = require('mongoose');
const MongoPaging = require('mongo-cursor-pagination');

const genderSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true, immutable: true },
  name: { type: String, required: true },
  abbreviation: { type: String, required: true },
});

genderSchema.plugin(MongoPaging.mongoosePlugin);
const Gender = mongoose.model('Gender', genderSchema);

module.exports = Gender;
