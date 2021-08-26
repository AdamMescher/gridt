const mongoose = require('mongoose');
const MongoPaging = require('mongo-cursor-pagination');

const disabilitySchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  abbreviation: { type: String, required: true },
});

disabilitySchema.plugin(MongoPaging.mongoosePlugin);
const Disability = mongoose.model('Disability', disabilitySchema);

module.exports = Disability;
