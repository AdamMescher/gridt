import express from 'express';
import Gender from '../../../db/schemas/genderSchema';

const router = express.Router();

router.get('/', async (request, response) => {
  try {
    const genders = await Gender.find({});
    response.status(200).json({ genders }).end();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    response.status(400).end();
  }
});

router.get('/:id', async (request, response) => {
  try {
    const gender = await Gender.find({ id: request.params.id });
    response.status(200).json({ gender });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    response.status(400).end();
  }
});

export default router;
