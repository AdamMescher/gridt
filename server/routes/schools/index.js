/* eslint-disable no-console */
const express = require('express');
const School = require('../../db/schemas/schoolSchema');

const router = express.Router();

router.get('/', async (request, response) => {
  try {
    const schools = await School.find({});
    response.status(200).json({ schools }).end();
    response.end();
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
});

router.get('/:id', async (request, response) => {
  try {
    const school = await School.find({
      COMBOKEY: request.params.id,
    });
    response.status(200).json(school).end();
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
});

router.post('/', async (request, response) => {
  const school = request.body;
  console.log({ school });
  try {
    await School.create(school);
    response.status(201).json(school).end();
  } catch (err) {
    console.error(err);
    response.status(500).end();
  }
});

module.exports = router;
