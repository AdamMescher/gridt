const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, require: true },
  standard: { type: Number, required: true },
  postal: { type: Number, required: true },
});

const State = mongoose.model("State", stateSchema);

module.exports = State;
