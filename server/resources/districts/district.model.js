const mongoose = require('mongoose');
const { composeMongoose } = require('graphql-compose-mongoose');

const districtSchema = new mongoose.Schema({
  LEA_STATE: { type: String, required: true },
  LEA_STATE_NAME: { type: String, required: true },
  LEAID: { type: String, required: true, unique: true },
  LEA_NAME: { type: String, required: true },
  LEA_ADDRESS: { type: String, required: true },
  LEA_CITY: { type: String, required: true },
  LEA_ZIP: { type: Number, required: true },
  CJJ: { type: String, required: true },
  LEA_ENR: { type: Number, required: true },
  LEA_ENR_NONLEAFAC: { type: Number, required: true },
  LEA_SCHOOLS: { type: Number, required: true },
  LEA_CRCOORD_SEX_IND: { type: String, required: true },
  LEA_CRCOORD_RAC_IND: { type: String, required: true },
  LEA_CRCOORD_DIS_IND: { type: String, required: true },
  LEA_CRCOORD_SEX_FN: { type: String, required: true },
  LEA_CRCOORD_SEX_LN: { type: String, required: true },
  LEA_CRCOORD_SEX_PH: { type: String, required: true },
  LEA_CRCOORD_SEX_EM: { type: String, required: true },
  LEA_CRCOORD_RAC_FN: { type: String, required: true },
  LEA_CRCOORD_RAC_LN: { type: String, required: true },
  LEA_CRCOORD_RAC_PH: { type: String, required: true },
  LEA_CRCOORD_RAC_EM: { type: String, required: true },
  LEA_CRCOORD_DIS_FN: { type: String, required: true },
  LEA_CRCOORD_DIS_LN: { type: String, required: true },
  LEA_CRCOORD_DIS_PH: { type: String, required: true },
  LEA_CRCOORD_DIS_EM: { type: String, required: true },
  LEA_DESEGPLAN: { type: String, required: true },
  LEA_HBPOLICY_IND: { type: String, required: true },
  LEA_HBPOLICYURL_IND: { type: String, required: true },
  LEA_HBPOLICY_URL: { type: String, required: true },
  LEA_ECE_IND: { type: String, required: true },
  LEA_ECE_NONIDEA: { type: Number, required: true },
  LEA_PS_IND: { type: String, required: true },
  LEA_PS_FULLDAYFREE: { type: String, required: true },
  LEA_PS_FULLDAYCOST: { type: String, required: true },
  LEA_PS_PARTDAYFREE: { type: String, required: true },
  LEA_PS_PARTDAYCOST: { type: String, required: true },
  LEA_PSENR_NONIDEA_A3: { type: String, required: true },
  LEA_PSENR_NONIDEA_A4: { type: String, required: true },
  LEA_PSENR_NONIDEA_A5: { type: String, required: true },
  LEA_PSENR_A2: { type: Number, required: true },
  LEA_PSENR_A3: { type: Number, required: true },
  LEA_PSENR_A4: { type: Number, required: true },
  LEA_PSENR_A5: { type: Number, required: true },
  LEA_PSELIG_ALL: { type: String, required: true },
  LEA_PSELIG_IDEA: { type: String, required: true },
  LEA_PSELIG_TITLEI: { type: String, required: true },
  LEA_PSELIG_LOWINC: { type: String, required: true },
  LEA_KG_IND: { type: String, required: true },
  LEA_KG_FULLDAYFREE: { type: Number, required: true },
  LEA_KG_FULLDAYCOST: { type: Number, required: true },
  LEA_KG_PARTDAYFREE: { type: Number, required: true },
  LEA_KG_PARTDAYCOST: { type: Number, required: true },
});

const District = mongoose.model('District', districtSchema);
const DistrictTC = composeMongoose(District);

module.exports = { District, DistrictTC };