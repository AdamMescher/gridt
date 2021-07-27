const mongoose = require('mongoose');

const disabilitySchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  abbreviation: { type: String, required: true },
});

const Disability = mongoose.model('Disability', disabilitySchema);

module.exports = Disability;
