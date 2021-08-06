const express = require('express');
const Gender = require('../../db/schemas/genderSchema');

const router = express.Router();

/**
 * @openapi
 * /genders:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: this is it
 */

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

router.post('/', async (request, response) => {
  try {
    const { id, name, abbreviation } = request.body;
    const gender = new Gender({ id, name, abbreviation });
    const ret = await gender.save();
    response.status(201).json(ret);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    response.status(400).end();
  }
});

module.exports = router;
