import express from 'express';
import State from '../../../db/schemas/stateSchema';

const router = express.Router();

router.get('/', async (request, response) => {
  try {
    const states = await State.find({});
    response.status(200).json({ states }).end();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    response.status(400).end();
  }
});

router.get('/:id', async (request, response) => {
  try {
    const state = await State.find({ id: request.params.id });
    response.status(200).json({ state });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    response.status(400).end();
  }
});

export default router;
