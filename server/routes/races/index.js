import express from 'express';
import Race from '../../../db/schemas/raceSchema';

const router = express.Router();

router.get('/', async (request, response) => {
  try {
    const races = await Race.find({});
    response.status(200).json({ races }).end();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    response.status(400).end();
  }
});

router.get('/:id', async (request, response) => {
  try {
    const race = await Race.find({ id: request.params.id });
    response.status(200).json({ race });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    response.status(400).end();
  }
});

export default router;
