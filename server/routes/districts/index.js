/* eslint-disable no-console */
const express = require('express');
const District = require('../../db/schemas/districtSchema');

const router = express.Router();

router.get('/', async (request, response) => {
  try {
    const districts = await District.find({});
    response.status(200).json({ districts });
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
});

router.get('/:id', async (request, response) => {
  try {
    const district = await District.find({ id: request.params.id });
    response.status(200).json(district);
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
});

module.exports = router;
