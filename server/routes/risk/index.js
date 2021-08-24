const express = require('express');
const School = require('../../db/schemas/schoolSchema');

const router = express.Router();

router.get('/', async (request, response) => {
  try {
    const results = await School.find({});
    return response.json({ results });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return response.status(400).end();
  }
});

module.exports = router;
