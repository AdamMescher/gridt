import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
  response.status(200).json({ message: 'sign from above' });
});

export default router;
