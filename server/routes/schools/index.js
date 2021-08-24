const express = require('express');
const School = require('../../db/schemas/schoolSchema');
const checkLimit = require('../../utils/checkLimit');

const router = express.Router();

router.get('/', async (request, response) => {
  const limit = parseInt(request.query.limit, 10) || 500;
  const name = request.query?.name;
  try {
    if (name) {
      const results = await School.find({
        SCH_NAME: { $regex: new RegExp(name), $options: 'i' },
      }).limit(10);
      return response.json(results);
    }
    checkLimit(response, limit, 1000);
    const schools = await School.paginate({ limit });
    return response.json({ schools }).end();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return response.status(400).end();
  }
});

router.get('/:id', async (request, response) => {
  const { id } = request.params;
  try {
    const school = await School.find({
      COMBOKEY: { $in: [id.toString(), parseInt(id, 10)] },
    });
    response.status(200).json(school).end();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    response.status(400).end();
  }
});

module.exports = router;
