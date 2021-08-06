/* eslint-disable no-console */
const express = require('express');
const School = require('../../db/schemas/schoolSchema');

const router = express.Router();

router.get('/', async (request, response) => {
  try {
    const schools = await School.find({});
    response.status(200).json({ schools });
    response.end();
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
});

router.get('/:id', async (request, response) => {
  try {
    const school = await School.find({
      COMBOKEY: parseInt(request.params.id, 10),
    });
    console.log({ school });
    response.status(200).json(school);
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
});

module.exports = router;
