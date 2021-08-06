const mongoose = require('mongoose');

const genderSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  abbreviation: { type: String, required: true, unique: true },
});

const Gender = mongoose.model('Gender', genderSchema);

module.exports = Gender;
