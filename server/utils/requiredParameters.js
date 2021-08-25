const Gender = require('../resources/genders/gender.model');

const requiredParameters = {
  gender: Object.keys(Gender.schema.tree).filter(
    (item) => item !== '__v' && item !== '_id',
  ),
};

module.exports = requiredParameters;
