const mongoose = require('mongoose');
const { composeMongoose } = require('graphql-compose-mongoose');

const visualimpairmentSchema = new mongoose.Schema({
  LEA_STATE: { type: String },
  LEA_STATE_NAME: { type: String },
  NCESLEAID: { type: String },
  LEA_NAME: { type: String },
  SCHID: { type: String },
  SCHOOL_NAME: { type: String },
  COMBOKEY: { type: String },
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
  SCH_VI_ENR_HI_M: { type: Number },
  SCH__ENR_HI_M: { type: Number },
  RI_HI_M_VI: { type: Number },
  TOT_VI_WO_HI_M: { type: Number },
  TOT_ENR_WO_HI_M: { type: Number },
  RI_WO_HI_M_VI: { type: Number },
  RR_HI_M_POP_VI: { type: Number, index: true },
  RI_WH_M_VI_1: { type: Number },
  RR_HI_M_WH_M_VI: { type: Number, index: true },
  SCH_VI_ENR_HI_F: { type: Number },
  SCH_ENR_HI_F: { type: Number },
  RI_HI_F_VI: { type: Number },
  TOT_VI_WO_HI_F: { type: Number },
  TOT_ENR_WO_HI_F: { type: Number },
  RI_WO_HI_F_VI: { type: Number },
  RR_HI_F_POP_VI: { type: Number, index: true },
  RI_WH_F_VI_2: { type: Number },
  RR_HI_F_WH_F_VI: { type: Number, index: true },
  SCH_VI_ENR_AM_M: { type: Number },
  SCH_ENR_AM_M: { type: Number },
  RI_AM_M_VI: { type: Number },
  TOT_VI_WO_AM_M: { type: Number },
  TOT_ENR_WO_AM_M: { type: Number },
  RI_WO_AM_M_VI: { type: Number },
  RR_AM_M_POP_VI: { type: Number, index: true },
  RI_WH_M_VI_3: { type: Number },
  RR_AM_M_WH_M_VI: { type: Number, index: true },
  SCH_VI_ENR_AM_F: { type: Number },
  SCH_ENR_AM_F: { type: Number },
  RI_AM_F_VI: { type: Number },
  TOT_VI_WO_AM_F: { type: Number },
  TOT_ENR_WO_AM_F: { type: Number },
  RI_WO_AM_F_VI: { type: Number },
  RR_AM_F_POP_VI: { type: Number, index: true },
  RI_WH_F_VI_4: { type: Number },
  RR_AM_F_WH_F_VI: { type: Number, index: true },
  SCH_VI_ENR_AS_M: { type: Number },
  SCH_ENR_AS_M: { type: Number },
  RI_AS_M_VI: { type: Number },
  TOT_VI_WO_AS_M: { type: Number },
  TOT_ENR_WO_AS_M: { type: Number },
  RI_WO_AS_M_VI: { type: Number },
  RR_AS_M_POP_VI: { type: Number, index: true },
  RI_WH_M_VI_5: { type: Number },
  RR_AS_M_WH_M_VI: { type: Number, index: true },
  SCH_VI_ENR_AS_F: { type: Number },
  SCH_ENR_AS_F: { type: Number },
  RI_AS_F_VI: { type: Number },
  TOT_VI_WO_AS_F: { type: Number },
  TOT_ENR_WO_AS_F: { type: Number },
  RI_WO_AS_F_VI: { type: Number },
  RR_AS_F_POP_VI: { type: Number, index: true },
  RI_WH_F_VI_6: { type: Number },
  RR_AS_F_WH_F_VI: { type: Number, index: true },
  SCH_VI_ENR_HP_M: { type: Number },
  SCH_ENR_HP_M: { type: Number },
  RI_HP_M_VI: { type: Number },
  TOT_VI_WO_HP_M: { type: Number },
  TOT_ENR_WO_HP_M: { type: Number },
  RI_WO_HP_M_VI: { type: Number },
  RR_HP_M_POP_VI: { type: Number, index: true },
  RI_WH_M_VI_7: { type: Number },
  RR_HP_M_WH_M_VI: { type: Number, index: true },
  SCH_VI_ENR_HP_F: { type: Number },
  SCH_ENR_HP_F: { type: Number },
  RI_HP_F_VI: { type: Number },
  TOT_VI_WO_HP_F: { type: Number },
  TOT_ENR_WO_HP_F: { type: Number },
  RI_WO_HP_F: { type: Number },
  RR_HP_F_POP_VI: { type: Number, index: true },
  RI_WH_F_VI_8: { type: Number },
  RR_HP_F_WH_F_VI: { type: Number, index: true },
  SCH_VI_ENR_BL_M: { type: Number },
  SCH_ENR_BL_M: { type: Number },
  RI_BL_M_VI: { type: Number },
  TOT_VI_WO_BL_M: { type: Number },
  TOT_ENR_WO_BL_M: { type: Number },
  RI_WO_BL_M_VI: { type: Number },
  RR_BL_M_POP_VI: { type: Number, index: true },
  RI_WH_M_VI_9: { type: Number },
  RR_BL_M_WH_M_VI: { type: Number, index: true },
  SCH_VI_ENR_BL_F: { type: Number },
  SCH_ENR_BL_F: { type: Number },
  RI_BL_F_VI: { type: Number },
  TOT_VI_WO_BL_F: { type: Number },
  TOT_EN_WO_BL_F: { type: Number },
  RI_WO_BL_F_VI: { type: Number },
  RR_BL_F_POP_VI: { type: Number, index: true },
  RI_WH_F_VI_10: { type: Number },
  RR_BL_F_WH_F_VI: { type: Number, index: true },
  SCH_VI_ENR_TR_M: { type: Number },
  SCH_ENR_TR_M: { type: Number },
  RI_TR_M_VI: { type: Number },
  TOT_VI_WO_TR_M: { type: Number },
  TOT_ENR_WO_TR_M: { type: Number },
  RI_WO_TR_M_VI: { type: Number },
  RR_TR_M_POP_VI: { type: Number, index: true },
  RI_WH_M_VI_11: { type: Number },
  RR_TR_M_WH_M_VI: { type: Number, index: true },
  SCH_VI_ENR_TR_F: { type: Number },
  SCH_ENR_TR_F: { type: Number },
  RI_TR_F_VI: { type: Number },
  TOT_VI_WO_TR_F: { type: Number },
  TOT_ENR_WO_TR_F: { type: Number },
  RI_WO_TR_F_VI: { type: Number },
  RR_TR_F_POP_VI: { type: Number, index: true },
  RI_WH_F_VI_12: { type: Number },
  RR_TR_F_WH_F_VI: { type: Number, index: true },
  SCH_VI_ENR_WH_M: { type: Number },
  SCH_ENR_WH_M: { type: Number },
  RI_WH_M_VI_13: { type: Number },
  TOT_VI_WO_WH_M: { type: Number },
  TOT_ENR_WO_WH_M: { type: Number },
  RI_WO_WH_M_VI: { type: Number },
  RR_WH_M_POP_VI: { type: Number, index: true },
  SCH_VI_ENR_WH_F: { type: Number },
  SCH_ENR_WH_F: { type: Number },
  RI_WH_F_VI_14: { type: Number },
  TOT_VI_WO_WH_F: { type: Number },
  TOT_ENR_WO_WH_F: { type: Number },
  RI_WO_WH_F_VI: { type: Number },
  RR_WH_F_POP_VI: { type: Number, index: true },
});

const Visualimpairment = mongoose.model(
  'Visualimpairment',
  visualimpairmentSchema,
);
const VisualimpairmentTC = composeMongoose(Visualimpairment);

module.exports = { Visualimpairment, VisualimpairmentTC };