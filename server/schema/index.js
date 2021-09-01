const { SchemaComposer } = require('graphql-compose');
const { GenderQuery, GenderMutation } = require('./gender');
const { RaceQuery, RaceMutation } = require('./race');
const { DisabilityQuery, DisabilityMutation } = require('./disability');
const { StateQuery, StateMutation } = require('./state');
const { DistrictQuery, DistrictMutation } = require('./district');
const { SchoolQuery, SchoolMutation } = require('./school');

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
  ...GenderQuery,
  ...RaceQuery,
  ...DisabilityQuery,
  ...StateQuery,
  ...DistrictQuery,
  ...SchoolQuery,
});

schemaComposer.Mutation.addFields({
  ...GenderMutation,
  ...RaceMutation,
  ...DisabilityMutation,
  ...StateMutation,
  ...DistrictMutation,
  ...SchoolMutation,
});

const schema = schemaComposer.buildSchema();

module.exports = schema;
