const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Gender = require('../db/schemas/genderSchema');
// eslint-disable-next-line import/extensions
const Race = require('../db/schemas/raceSchema.js');
const Disability = require('../db/schemas/disabilitySchema');
const District = require('../db/schemas/districtSchema');
const School = require('../db/schemas/schoolSchema');

const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT || 3333);
app.locals.title = 'GRID-T SERVER';

// app.use('/api/v1/genders', genderRouter);

app.get('/test', async (request, response) => {
  response.status(200).json({ message: 'pass!' });
});

// GENDERS
app.get('/api/v1/genders', async (request, response) => {
  try {
    const genders = await Gender.find({});
    response.status(200).json({ genders }).end();
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
});

app.get('/api/v1/genders/:id', async (request, response) => {
  try {
    const gender = await Gender.find({ id: request.params.id });
    response.status(200).json({ gender });
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
});

// RACES
app.get('/api/v1/races', async (request, response) => {
  try {
    const races = await Race.find({});
    response.status(200).json({ races }).end();
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
});

app.get('/api/v1/races/:id', async (request, response) => {
  try {
    const race = await Race.find({ id: request.params.id });
    response.status(200).json({ race });
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
});

// DISABILITIES
app.get('/api/v1/disabilities', async (request, response) => {
  try {
    const disabilities = await Disability.find({});
    response.status(200).json({ disabilities });
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
});

app.get('/api/v1/disabilities/:id', async (request, response) => {
  try {
    const disabilities = await Disability.find({ id: request.params.id });
    response.status(200).json(disabilities);
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
});

// DISTRICTS
app.get('/api/v1/districts', async (request, response) => {
  try {
    const districts = await District.find({});
    response.status(200).json({ districts });
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
});

app.get('/api/v1/districts/:id', async (request, response) => {
  try {
    const district = await District.find({ id: request.params.id });
    response.status(200).json(district);
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
});

// SCHOOLS
app.get('/api/v1/schools', async (request, response) => {
  try {
    const schools = await School.find({});
    response.status(200).json({ schools });
    response.end();
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
});

app.get('/api/v1/schools/:id', async (request, response) => {
  try {
    const school = await School.find({ comboKey: request.params.id });
    response.status(200).json(school);
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
});

app.get('api/v1/schools/state/:abbreviation', async (request, response) => {
  try {
    const school = await School.find({
      stateAbbreviation: request.params.abbreviation,
    });
    response.status(200).json(school);
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
});

app.get('api/v1/schools/district/:id', (request, response) => {
  try {
  } catch (err) {}
});

app.get('api/v1/schools/name/:name', (request, response) => {});

const start = async () => {
  try {
    const path = 'mongodb://localhost/gridt';
    const options = { useNewUrlParser: true, useUnifiedTopology: true };
    await mongoose.connect(path, options);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      console.log('CONNECTED TO GRID-T');
    });
    app.listen(app.get('port'), () => {
      console.log(`${app.locals.title} is running on port ${app.get('port')}`);
    });
  } catch (err) {
    console.error(err);
  }
};
