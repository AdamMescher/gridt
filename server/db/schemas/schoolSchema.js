const mongoose = require('mongoose');
require('mongoose-long')(mongoose);

const {
  Types: { Long },
} = mongoose;

const schoolSchema = new mongoose.Schema({
  LEA_STATE: { type: String },
  LEA_STATE_NAME: { type: String },
  LEAID: { type: String },
  LEA_NAME: { type: String },
  SCHID: { type: String },
  SCH_NAME: { type: String },
  COMBOKEY: { type: Long },
  SCH_IDEAENR_HI_M: { type: String },
  SCH_ENR_HI_M: { type: String },
  RI_HI_M: { type: String },
  'TOT_IDEA_W/O_HI_M': { type: String },
  'TOT_ENR_W/O_HI_M': { type: String },
  'RI_W/O_HI_M': { type: String },
  RR_HI_M_POP: { type: String },
  RR_HI_M_WH_M: { type: String },
  SCH_IDEAENR_HI_F: { type: String },
  SCH_ENR_HI_F: { type: String },
  RI_HI_F: { type: String },
  'TOT_IDEA_W/O_HI_F': { type: String },
  'TOT_ENR_W/O_HI_F': { type: String },
  'RI_W/O_HI_F': { type: String },
  RR_HI_F_POP: { type: String },
  RR_HI_F_WH_F: { type: String },
  SCH_IDEAENR_AM_M: { type: String },
  SCH_ENR_AM_M: { type: String },
  RI_AM_M: { type: String },
  'TOT_IDEA_W/O_AM_M': { type: String },
  'TOT_ENR_W/O_AM_M': { type: String },
  'RI_W/O_AM_M': { type: String },
  RR_AM_M_POP: { type: String },
  RR_AM_M_WH_M: { type: String },
  SCH_IDEAENR_AM_F: { type: String },
  SCH_ENR_AM_F: { type: String },
  RI_AM_F: { type: String },
  'TOT_IDEA_W/O_AM_F': { type: String },
  'TOT_ENR_W/O_AM_F': { type: String },
  'RI_W/O_AM_F': { type: String },
  RR_AM_F_POP: { type: String },
  RR_AM_F_WH_F: { type: String },
  SCH_IDEAENR_AS_M: { type: String },
  SCH_ENR_AS_M: { type: String },
  RI_AS_M: { type: String },
  'TOT_IDEA_W/O_AS_M': { type: String },
  'TOT_ENR_W/O_AS_M': { type: String },
  'RI_W/O_AS_M': { type: String },
  RR_AS_M_POP: { type: String },
  RR_AS_M_WH_M: { type: String },
  SCH_IDEAENR_AS_F: { type: String },
  SCH_ENR_AS_F: { type: String },
  RI_AS_F: { type: String },
  'TOT_IDEA_W/O_AS_F': { type: String },
  'TOT_ENR_W/O_AS_F': { type: String },
  'RI_W/O_AS_F': { type: String },
  RR_AS_F_POP: { type: String },
  RR_AS_F_WH_F: { type: String },
  SCH_IDEAENR_HP_M: { type: String },
  SCH_ENR_HP_M: { type: String },
  RI_HP_M: { type: String },
  'TOT_IDEA_W/O_HP_M': { type: String },
  'TOT_ENR_W/O_HP_M': { type: String },
  'RI_W/O_HP_M': { type: String },
  RR_HP_M_POP: { type: String },
  RR_HP_M_WH_M: { type: String },
  SCH_IDEAENR_HP_F: { type: String },
  SCH_ENR_HP_F: { type: String },
  RI_HP_F: { type: String },
  'TOT_IDEA_W/O_HP_F': { type: String },
  'TOT_ENR_W/O_HP_F': { type: String },
  'RI_W/O_HP_F': { type: String },
  RR_HP_F_POP: { type: String },
  RR_HP_F_WH_F: { type: String },
  SCH_IDEAENR_BL_M: { type: String },
  SCH_ENR_BL_M: { type: String },
  RI_BL_M: { type: String },
  'TOT_IDEA_W/O_BL_M': { type: String },
  'TOT_ENR_W/O_BL_M': { type: String },
  'RI_W/O_BL_M': { type: String },
  RR_BL_M_POP: { type: String },
  RR_BL_M_WH_M: { type: String },
  SCH_IDEAENR_BL_F: { type: String },
  SCH_ENR_BL_F: { type: String },
  RI_BL_F: { type: String },
  'TOT_IDEA_W/O_BL_F': { type: String },
  'TOT_ENR_W/O_BL_F': { type: String },
  'RI_W/O_BL_F': { type: String },
  RR_BL_F_POP: { type: String },
  RR_BL_F_WH_F: { type: String },
  SCH_IDEAENR_TR_M: { type: String },
  SCH_ENR_TR_M: { type: String },
  RI_TR_M: { type: String },
  'TOT_IDEA_W/O_TR_M': { type: String },
  'TOT_ENR_W/O_TR_M': { type: String },
  'RI_W/O_TR_M': { type: String },
  RR_TR_M_POP: { type: String },
  RR_TR_M_WH_M: { type: String },
  SCH_IDEAENR_TR_F: { type: String },
  SCH_ENR_TR_F: { type: String },
  RI_TR_F: { type: String },
  'TOT_IDEA_W/O_TR_F': { type: String },
  'TOT_ENR_W/O_TR_F': { type: String },
  'RI_W/O_TR_F': { type: String },
  RR_TR_F_POP: { type: String },
  RR_TR_F_WH_F: { type: String },
  SCH_IDEAENR_WH_M: { type: String },
  SCH_ENR_WH_M: { type: String },
  'TOT_IDEA_W/O_WH_M': { type: String },
  'TOT_ENR_W/O_WH_M': { type: String },
  'RI_W/O_WH_M': { type: String },
  RR_WH_M_POP: { type: String },
  RR_WH_M_WH_M: { type: String },
  SCH_IDEAENR_WH_F: { type: String },
  SCH_ENR_WH_F: { type: String },
  'TOT_IDEA_W/O_WH_F': { type: String },
  'TOT_ENR_W/O_WH_F': { type: String },
  'RI_W/O_WH_F': { type: String },
  RR_WH_F_POP: { type: String },
  RR_WH_F_WH_F: { type: String },
  TOT_IDEAENR_M: { type: String },
  TOT_IDEAENR_F: { type: String },
  TOT_IDEA_ENR: { type: String },
  TOT_ENR_M: { type: String },
  TOT_ENR_F: { type: String },
  TOT_ENR: { type: String },
  SCH_IDEA_WH_TOT: { type: String },
  SCH_ENR_WH_TOT: { type: String },
  RI_WH_TOT: { type: String },
  'TOT_IDEA_W/O_WH_TOT': { type: String },
  'TOT_ENR_W/O_WH_TOT': { type: String },
  'RI_W/O_WH_TOT': { type: String },
  RR_WH_TOT_POP: { type: String },
  RR_WH_TOT_WH_TOT: { type: String },
  RR_HI_M_WH_TOT: { type: String },
  RR_HI_F_WH_TOT: { type: String },
  RR_AM_M_WH_TOT: { type: String },
  RR_AM_F_WH_TOT: { type: String },
  RR_AS_M_WH_TOT: { type: String },
  RR_AS_F_WH_TOT: { type: String },
  RR_HP_M_WH_TOT: { type: String },
  RR_HP_F_WH_TOT: { type: String },
  RR_BL_M_WH_TOT: { type: String },
  RR_BL_F_WH_TOT: { type: String },
  RR_TR_M_WH_TOT: { type: String },
  RR_TR_F_WH_TOT: { type: String },
  RI_WH_M: { type: String },
  RI_WH_F: { type: String },
});
const School = mongoose.model('School', schoolSchema);

module.exports = School;
