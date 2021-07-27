import express from 'express';
import path from 'path';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import gendersRouter from './routes/genders';
import racesRouter from './routes/races';
import disabilitiesRouter from './routes/disabilities';
import statesRouter from './routes/states';
import districtsRouter from './routes/districts';
import schoolsRouter from './routes/schools';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/genders', gendersRouter);
app.use('/api/v1/races', racesRouter);
app.use('/api/v1/disabilities', disabilitiesRouter);
app.use('/api/v1/states', statesRouter);
app.use('api/v1/districts', districtsRouter);
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

export default app;
