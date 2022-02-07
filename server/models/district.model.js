const mongoose = require('mongoose');
const { composeMongoose } = require('graphql-compose-mongoose');

const districtSchema = new mongoose.Schema({
  LEA_STATE: { type: String, required: true },
  LEA_STATE_NAME: { type: String, required: true },
  LEAID: { type: String, required: true, unique: true },
  LEA_NAME: { type: String, required: true },
  LEA_ADDRESS: { type: String, required: true },
  LEA_CITY: { type: String, required: true },
  LEA_ZIP: { type: String, required: true },
  CJJ: { type: String, required: true },
  LEA_ENR: { type: Number, required: true },
  LEA_ENR_NONLEAFAC: { type: Number, required: true },
  LEA_SCHOOLS: { type: Number, required: true },
});

const District = mongoose.model('District', districtSchema);
const DistrictTC = composeMongoose(District);

module.exports = { District, DistrictTC };
