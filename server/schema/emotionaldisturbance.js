const {
  EmotionaldisturbanceTC,
} = require('../models/emotionaldisturbance.model');

const EmotionaldisturbanceQuery = {
  emotionaldisturbance: EmotionaldisturbanceTC.mongooseResolvers.findOne(),
  emotionaldisturbances: EmotionaldisturbanceTC.mongooseResolvers.findMany(),
};

const EmotionaldisturbanceMutation = {};

module.exports = { EmotionaldisturbanceQuery, EmotionaldisturbanceMutation };
