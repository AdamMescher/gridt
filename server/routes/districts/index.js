/* eslint-disable no-console */
const express = require('express');
const District = require('../../db/schemas/districtSchema');

const router = express.Router();

router.get('/', async (request, response) => {
  try {
    const districts = await District.find({});
    return response.status(200).json({ districts });
  } catch (err) {
    console.error(err);
    return response.status(400).end();
  }
});

router.get('/:id', async (request, response) => {
  const { id } = request.params;
  try {
    console.log(typeof request.params.id);
    const district = await District.find({
      LEAID: { $in: [id.toString(), parseInt(id, 10)] },
    });
    response.status(200).json(district);
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
});

module.exports = router;
