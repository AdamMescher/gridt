const mongoose = require('mongoose');
const MongoPaging = require('mongo-cursor-pagination');

const raceSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  abbreviation: { type: String, required: true },
});

const Race = mongoose.model('Race', raceSchema);

raceSchema.plugin(MongoPaging.mongoosePlugin);
module.exports = Race;
