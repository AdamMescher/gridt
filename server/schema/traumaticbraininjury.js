const {
  TraumaticbraininjuryTC,
} = require('../models/traumaticbraininjury.model');

const TraumaticbraininjuryQuery = {
  traumaticbraininjury: TraumaticbraininjuryTC.mongooseResolvers.findOne(),
  traumaticbraininjuries: TraumaticbraininjuryTC.mongooseResolvers.findMany(),
};

const TraumaticbraininjuryMutation = {};

module.exports = { TraumaticbraininjuryQuery, TraumaticbraininjuryMutation };
