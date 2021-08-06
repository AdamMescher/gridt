const mongoose = require('mongoose');

const disabilitySchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  abbreviation: { type: String, required: true, unique: true },
});

const Disability = mongoose.model('Disability', disabilitySchema);

module.exports = Disability;
