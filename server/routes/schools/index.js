/* eslint-disable no-console */
import express from 'express';
import School from '../../db/schemas/schoolSchema';

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
    const school = await School.find({ comboKey: request.params.id });
    response.status(200).json(school);
  } catch (err) {
    console.error(err);
    response.status(400).end();
  }
});

export default router;
