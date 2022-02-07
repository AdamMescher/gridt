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
});

const schema = schemaComposer.buildSchema();

module.exports = schema;
