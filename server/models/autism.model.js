const mongoose = require('mongoose');
const { composeMongoose } = require('graphql-compose-mongoose');

const autismSchema = new mongoose.Schema({
  LEA_STATE: { type: String },
  LEA_STATE_NAME: { type: String },
  NCESLEAID: { type: String },
  LEA_NAME: { type: String },
  SCHID: { type: String },
  SCHOOL_NAME: { type: String, index: true },
  COMBOKEY: { type: String, index: true },
  JJ: { type: Number },
  DISABILITY_CATEGORY: { type: String },
  AM_M_7: { type: Number },
  AS_M_7: { type: Number },
  BL_M_7: { type: Number },
  HI_M_7: { type: Number },
  MU_M_7: { type: Number },
  PI_M_7: { type: Number },
  WH_M_7: { type: Number },
  AM_F_7: { type: Number },
  AS_F_7: { type: Number },
  BL_F_7: { type: Number },
  HI_F_7: { type: Number },
  MU_F_7: { type: Number },
  PI_F_7: { type: Number },
  WH_F_7: { type: Number },
  TOTAL_STUDENTS_REPORTED: { type: Number },
  SCH_AUT_ENR_HI_M: { type: Number, index: true },
  SCH_ENR_HI_M: { type: Number },
  RI_HI_M_AUT: { type: Number },
  TOT_AUT_WO_HI_M: { type: Number },
  TOT_ENR_WO_HI_M: { type: Number },
  RI_WO_HI_M_AUT: { type: Number },
  RR_HI_M_POP_AUT: { type: Number, index: true },
  RI_WH_M_AUT_1: { type: Number },
  RR_HI_M_WH_M_AUT: { type: Number, index: true },
  SCH_AUT_ENR_HI_F: { type: Number, index: true },
  SCH_ENR_HI_F: { type: Number },
  RI_HI_F_AUT: { type: Number },
  TOT_AUT_WO_HI_F: { type: Number },
  TOT_ENR_WO_HI_F: { type: Number },
  RI_WO_HI_F: { type: Number },
  RR_HI_F_POP_AUT: { type: Number, index: true },
  RI_WH_F_AUT_2: { type: Number },
  RR_HI_F_WH_F_AUT: { type: Number, index: true },
  SCH_AUT_ENR_AM_M: { type: Number, index: true },
  SCH_ENR_AM_M: { type: Number },
  RI_AM_M_AUT: { type: Number },
  TOT_AUT_WO_AM_M: { type: Number },
  TOT_ENR_WO_AM_M: { type: Number },
  RI_WO_AM_M: { type: Number },
  RR_AM_M_POP_AUT: { type: Number, index: true },
  RI_WH_M_AUT_3: { type: Number },
  RR_AM_M_WH_M_AUT: { type: Number, index: true },
  SCH_AUT_ENR_AM_F: { type: Number, index: true },
  SCH_ENR_AM_F: { type: Number },
  RI_AM_F_AUT: { type: Number },
  TOT_AUT_WO_AM_F: { type: Number },
  TOT_ENR_WO_AM_F: { type: Number },
  RI_WO_AM_F_AUT: { type: Number },
  RR_AM_F_POP_AUT: { type: Number, index: true },
  RI_WH_F_AUT_4: { type: Number },
  RR_AM_F_WH_F_AUT: { type: Number, index: true },
  SCH_AUT_ENR_AS_M: { type: Number, index: true },
  SCH_ENR_AS_M: { type: Number },
  RI_AS_M_AUT: { type: Number },
  TOT_AUT_WO_AS_M: { type: Number },
  TOT_ENR_WO_AS_M: { type: Number },
  RI_WO_AS_M_AUT: { type: Number },
  RR_AS_M_POP_AUT: { type: Number, index: true },
  RI_WH_M_AUT_5: { type: Number },
  RR_AS_M_WH_M_AUT: { type: Number, index: true },
  SCH_AUT_ENR_AS_F: { type: Number, index: true },
  SCH_ENR_AS_F: { type: Number },
  RI_AS_F_AUT: { type: Number },
  TOT_AUT_WO_AS_F: { type: Number },
  TOT_ENR_WO_AS_F: { type: Number },
  RI_WO_AS_F_AUT: { type: Number },
  RR_AS_F_POP_AUT: { type: Number, index: true },
  RI_WH_F_AUT_6: { type: Number },
  RR_AS_F_WH_F_AUT: { type: Number, index: true },
  SCH_AUT_ENR_HP_M: { type: Number, index: true },
  SCH_ENR_HP_M: { type: Number },
  RI_HP_M_AUT: { type: Number },
  TOT_AUT_WO_HP_M: { type: Number },
  TOT_ENR_WO_HP_M: { type: Number },
  RI_WO_HP_M_AUT: { type: Number },
  RR_HP_M_POP_AUT: { type: Number, index: true },
  RI_WH_M_AUT_7: { type: Number },
  RR_HP_M_WH_M_AUT: { type: Number, index: true },
  SCH_AUT_ENR_HP_F: { type: Number, index: true },
  SCH_ENR_HP_F: { type: Number },
  RI_HP_F_AUT: { type: Number },
  TOT_AUT_WO_HP_F: { type: Number },
  TOT_ENR_WO_HP_F: { type: Number },
  RI_WO_HP_F: { type: Number },
  RR_HP_F_POP_AUT: { type: Number, index: true },
  RI_WH_F_AUT_8: { type: Number },
  RR_HP_F_WH_F_AUT: { type: Number, index: true },
  SCH_AUT_ENR_BL_M: { type: Number, index: true },
  SCH_ENR_BL_M: { type: Number },
  RI_BL_M_AUT: { type: Number },
  TOT_AUT_WO_BL_M: { type: Number },
  TOT_ENR_WO_BL_M: { type: Number },
  RI_WO_BL_M: { type: Number },
  RR_BL_M_POP_AUT: { type: Number, index: true },
  RI_WH_M_AUT_9: { type: Number },
  RR_BL_M_WH_M_AUT: { type: Number, index: true },
  SCH_AUT_ENR_BL_F: { type: Number, index: true },
  SCH_ENR_BL_F: { type: Number },
  RI_BL_F_AUT: { type: Number },
  TOT_AUT_WO_BL_F: { type: Number },
  TOT_ENR_WO_BL_F: { type: Number },
  RI_WO_BL_F: { type: Number },
  RR_BL_F_POP_AUT: { type: Number, index: true },
  RI_WH_F_AUT_10: { type: Number },
  RR_BL_F_WH_F_AUT: { type: Number, index: true },
  SCH_AUT_ENR_TR_M: { type: Number, index: true },
  SCH_ENR_TR_M: { type: Number },
  RI_TR_M_AUT: { type: Number },
  TOT_AUT_WO_TR_M: { type: Number },
  TOT_ENR_WO_TR_M: { type: Number },
  RI_WO_TR_M: { type: Number },
  RR_TR_M_POP_AUT: { type: Number, index: true },
  RI_WH_M_AUT_11: { type: Number },
  RR_TR_M_WH_M_AUT: { type: Number, index: true },
  SCH_AUT_ENR_TR_F: { type: Number, index: true },
  SCH_ENR_TR_F: { type: Number },
  RI_TR_F_AUT: { type: Number },
  TOT_AUT_WO_TR_F: { type: Number },
  TOT_ENR_WO_TR_F: { type: Number },
  RI_WO_TR_F: { type: Number },
  RR_TR_F_POP_AUT: { type: Number, index: true },
  RI_WH_F_AUT_12: { type: Number },
  RR_TR_F_WH_F_AUT: { type: Number, index: true },
  SCH_AUT_ENR_WH_M: { type: Number, index: true },
  SCH_ENR_WH_M: { type: Number },
  RI_WH_M_AUT_13: { type: Number },
  TOT_AUT_WO_WH_M: { type: Number },
  TOT_ENR_WO_WH_M: { type: Number },
  RI_WO_WH_M: { type: Number },
  RR_WH_M_POP_AUT: { type: Number, index: true },
  SCH_AUT_ENR_WH_F: { type: Number, index: true },
  SCH_ENR_WH_F: { type: Number },
  RI_WH_F_AUT_14: { type: Number },
  TOT_AUT_WO_WH_F: { type: Number },
  TOT_ENR_WO_WH_F: { type: Number },
  RI_WO_WH_F: { type: Number },
  RR_WH_F_POP_AUT: { type: Number, index: true },
});

const Autism = mongoose.model('Autism', autismSchema);
const AutismTC = composeMongoose(Autism);

module.exports = { Autism, AutismTC };
