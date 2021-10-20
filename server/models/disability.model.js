const mongoose = require('mongoose');
const { composeMongoose } = require('graphql-compose-mongoose');

const disabilitySchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  abbreviation: { type: String, required: true },
});

const Disability = mongoose.model('Disability', disabilitySchema);
const DisabilityTC = composeMongoose(Disability);

module.exports = { Disability, DisabilityTC };
