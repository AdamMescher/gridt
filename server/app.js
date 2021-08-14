const express = require('express');
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../openapi.json');
const indexRouter = require('./routes/index');
const gendersRouter = require('./routes/genders');
const racesRouter = require('./routes/races');
const disabilitiesRouter = require('./routes/disabilities');
const statesRouter = require('./routes/states');
const districtsRouter = require('./routes/districts');
const schoolsRouter = require('./routes/schools');

const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', indexRouter);
app.use('/api/v1/genders', gendersRouter);
app.use('/api/v1/races', racesRouter);
app.use('/api/v1/disabilities', disabilitiesRouter);
app.use('/api/v1/states', statesRouter);
app.use('/api/v1/districts', districtsRouter);
app.use('/api/v1/schools', schoolsRouter);

app.use((request, response, next) => {
  next(createError(404));
});

// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
  response.locals.message = error.message;
  response.locals.error = request.app.get('env') === 'development' ? error : {};
  response.status(error.status || 500);
  response.render('error');
});

module.exports = app;
