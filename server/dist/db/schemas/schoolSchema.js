"use strict";

const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  comboKey: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  grades: {
    ps: {
      type: Boolean,
      required: true
    },
    kg: {
      type: Boolean,
      required: true
    },
    g01: {
      type: Boolean,
      required: true
    },
    g02: {
      type: Boolean,
      required: true
    },
    g03: {
      type: Boolean,
      required: true
    },
    g04: {
      type: Boolean,
      required: true
    },
    g05: {
      type: Boolean,
      required: true
    },
    g06: {
      type: Boolean,
      required: true
    },
    g07: {
      type: Boolean,
      required: true
    },
    g08: {
      type: Boolean,
      required: true
    },
    g09: {
      type: Boolean,
      required: true
    },
    g10: {
      type: Boolean,
      required: true
    },
    g11: {
      type: Boolean,
      required: true
    },
    g12: {
      type: Boolean,
      required: true
    }
  },
  disabilities: {},
  isSped: {
    type: Boolean,
    required: true
  },
  isMagnet: {
    type: Boolean,
    required: true
  },
  isCharter: {
    type: Boolean,
    required: true
  },
  stateName: {
    type: String,
    required: true
  },
  stateAbbreviation: {
    type: String,
    required: true
  },
  districtId: {
    type: Number,
    required: true
  },
  districtName: {
    type: String,
    required: true
  }
});
const School = mongoose.model("School", schoolSchema);
module.exports = School;