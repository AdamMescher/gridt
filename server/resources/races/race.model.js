const mongoose = require('mongoose');
const { composeMongoose } = require('graphql-compose-mongoose');

const raceSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  abbreviation: { type: String, required: true },
});

const Race = mongoose.model('Race', raceSchema);
const RaceTC = composeMongoose(Race);

module.exports = { Race, RaceTC };
