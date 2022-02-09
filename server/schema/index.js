const { SchemaComposer } = require('graphql-compose');
const { GenderQuery, GenderMutation } = require('./gender');
const { RaceQuery, RaceMutation } = require('./race');
const { DisabilityQuery, DisabilityMutation } = require('./disability');
const { DistrictQuery, DistrictMutation } = require('./district');
const { SchoolQuery, SchoolMutation } = require('./school');
const { AutismQuery, AutismMutation } = require('./autism');
const {
  DeafBlindnessQuery,
  DeafBlindnessMutation,
} = require('./deafblindness');
const {
  VisualimpairmentQuery,
  VisualimpairmentMutate,
} = require('./visualimpairment');
const {
  DevelopmentaldelayQuery,
  DevelopmentaldelayMutation,
} = require('./developmentaldelay');
const {
  EmotionaldisturbanceQuery,
  EmotionaldisturbanceMutation,
} = require('./emotionaldisturbance');
const {
  HearingimpairmentQuery,
  HearingimpairmentMutation,
} = require('./hearingimpairment');
const {
  IntellectualdisabilityQuery,
  IntellectualdisabilityMutation,
} = require('./intellectualdisability');
const {
  MultipledisabilitiesQuery,
  MultipledisabilitiesMutation,
} = require('./multipledisability');
const {
  OrthopedicimpairmentQuery,
  OrthopedicimpairmentMutation,
} = require('./orthopedicimpairment');
const {
  OtherhealthimpairmentQuery,
  OtherhealthimpairmentMutation,
} = require('./otherhealthimpairment');
const {
  SpecificlearningdisabilityQuery,
  SpecificlearningdisabilityMutation,
} = require('./specificlearningdisability');
const {
  SpeechlanguageimpairmentQuery,
  SpeechlanguageimpairmentMutation,
} = require('./speechlanguageimpairment');
const {
  TraumaticbraininjuryQuery,
  TraumaticbraininjuryMutation,
} = require('./traumaticbraininjury');

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
  ...GenderQuery,
  ...RaceQuery,
  ...DisabilityQuery,
  ...DistrictQuery,
  ...SchoolQuery,
  ...AutismQuery,
  ...DeafBlindnessQuery,
  ...VisualimpairmentQuery,
  ...DevelopmentaldelayQuery,
  ...EmotionaldisturbanceQuery,
  ...HearingimpairmentQuery,
  ...IntellectualdisabilityQuery,
  ...MultipledisabilitiesQuery,
  ...OrthopedicimpairmentQuery,
  ...OtherhealthimpairmentQuery,
  ...SpecificlearningdisabilityQuery,
  ...SpeechlanguageimpairmentQuery,
  ...TraumaticbraininjuryQuery,
});

schemaComposer.Mutation.addFields({
  ...GenderMutation,
  ...RaceMutation,
  ...DisabilityMutation,
  ...DistrictMutation,
  ...SchoolMutation,
  ...AutismMutation,
  ...DeafBlindnessMutation,
  ...VisualimpairmentMutate,
  ...DevelopmentaldelayMutation,
  ...EmotionaldisturbanceMutation,
  ...HearingimpairmentMutation,
  ...IntellectualdisabilityMutation,
  ...MultipledisabilitiesMutation,
  ...OrthopedicimpairmentMutation,
  ...OtherhealthimpairmentMutation,
  ...SpecificlearningdisabilityMutation,
  ...SpeechlanguageimpairmentMutation,
  ...TraumaticbraininjuryMutation,
});

const schema = schemaComposer.buildSchema();

module.exports = schema;
