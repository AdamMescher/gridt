import express from 'express';
import Disability from '../../db/schemas/disabilitySchema';

const router = express.Router();

router.get('/', async (request, response) => {
  try {
    const disabilities = await Disability.find({});
    response.status(200).json({ disabilities });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    response.status(400).end();
  }
});

router.get('/:id', async (request, response) => {
  try {
    const disabilities = await Disability.find({ id: request.params.id });
    response.status(200).json(disabilities);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    response.status(400).end();
  }
});

export default router;
