const { SchoolTC } = require('../resources/schools/school.model');

const SchoolQuery = {
  school: SchoolTC.mongooseResolvers.findOne(),
  schools: SchoolTC.mongooseResolvers.findMany(),
};

const SchoolMutation = {
  schoolsCreateOne: SchoolTC.mongooseResolvers.createOne(),
};

module.exports = { SchoolQuery, SchoolMutation };
