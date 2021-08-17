const mongoose = require('mongoose');

const raceSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  abbreviation: { type: String, required: true },
});

const Race = mongoose.model('Race', raceSchema);

module.exports = Race;
