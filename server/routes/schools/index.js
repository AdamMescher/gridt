/* eslint-disable no-console */
const express = require('express');
const School = require('../../db/schemas/schoolSchema');

const router = express.Router();

router.get('/', async (request, response) => {
  try {
    // const schoolsCount = await School.countDocuments({});
    // let page = parseInt(request.query.page);
    // if (!page) {
    //   page = 1;
    // }
    // if (page > schoolsCount) {
    //   page = pageCount;
    // }
    // const schools = await School.find()
    //   .limit(perPage)
    //   .skip(perPage * page)
    // response.send(200).json({ schools }).end();
  } catch (err) {
    console.error(err);
    response.status(400).end();
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
