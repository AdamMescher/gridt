const mongoose = require("mongoose");

const districtSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  stateName: { type: String, required: true },
  stateAbbreviation: { type: String, required: true },
  enrollment: { type: String, required: true }
});

const District = mongoose.model("District", districtSchema);

module.exports = District;
