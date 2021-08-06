const mongoose = require('mongoose');

const raceSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  abbreviation: { type: String, required: true, unique: true },
});

const Race = mongoose.model('Race', raceSchema);

module.exports = Race;
