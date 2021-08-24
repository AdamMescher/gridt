const express = require('express');
const Gender = require('../../db/schemas/genderSchema');

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

router.post('/', async (request, response) => {
  try {
    const genderBody = request.body;
    const { id, name, abbreviation } = genderBody;
    const requiredParameters = ['id', 'name', 'abbreviation'];
    requiredParameters.forEach((param) => {
      if (!Object.prototype.hasOwnProperty.call(genderBody, param)) {
        response
          .status(422)
          .json({ error: `You are missing the required '${param}' property` });
      }
    });
    const gender = await new Gender({ id, name, abbreviation });
    const foundId = await Gender.find({ id });
    const foundName = await Gender.find({ name });
    const foundAbbreviation = await Gender.find({ abbreviation });
    if (foundId.length > 0) {
      response.status(409).json({
        message: 'An item with that ID already exists. ID must be unique.',
      });
    } else if (foundName.length > 0) {
      response.status(409).json({
        message:
          'An item with that Name already exists. Please use a unique name. ',
      });
    } else if (foundAbbreviation.length > 0) {
      response.status(409).json({
        message:
          'An item with that Abbreviation already exists. Please use a unique abbreviation.',
      });
    } else {
      gender.save();
      response.status(201).json(gender);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    response.status(400).end();
  }
});

router.delete('/', async (request, response) => {
  try {
    await Gender.deleteMany({});
    response.status(202).json({ message: 'All Genders deleted successfully' });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    response.status(400).end();
  }
});

router.delete('/:id', async (request, response) => {
  try {
    const toDelete = await Gender.find({ id: request.params.id });
    if (toDelete.length === 0) {
      response
        .status(404)
        .json({ message: `Gender with ID: ${request.params.id} not found` });
    } else {
      await Gender.remove({ id: request.params.id });
      response.status(202).json({
        message: `Gender with ID: ${request.params.id} deleted successfully`,
      });
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    response.status(400).end();
  }
});

module.exports = router;
