const Gender = require('../resources/genders/gender.model');
const Race = require('../resources/races/race.model');
const Disability = require('../resources/disabilities/disability.model');

const filterOutMongoProperties = (model) =>
  Object.keys(model.schema.tree).filter(
    (item) => item !== '__v' && item !== '_id',
  );

const requiredParameters = {
  gender: filterOutMongoProperties(Gender),
  race: filterOutMongoProperties(Race),
  disability: filterOutMongoProperties(Disability),
};

module.exports = requiredParameters;
