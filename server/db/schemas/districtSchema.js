const mongoose = require('mongoose');

const districtSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  city: { type: String, required: true, unique: true },
  stateName: { type: String, required: true, unique: true },
  stateAbbreviation: { type: String, required: true, unique: true },
  enrollment: { type: String, required: true, unique: true },
});

const District = mongoose.model('District', districtSchema);

module.exports = District;
