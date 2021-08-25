const crudControllers = require('../../utils/crud');
const Gender = require('./gender.model');

module.exports = crudControllers(Gender);
