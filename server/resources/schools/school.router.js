const express = require('express');
const controllers = require('./school.controller');
const School = require('./school.model');

const router = express.Router();

router.route('/search').get(async (request, response) => {
  const name = request.query?.name;
  try {
    const results = await School.find({
      SCH_NAME: { $regex: new RegExp(name), $options: 'i' },
    }).limit(20);
    return response.status(200).json(results);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return response.status(400).end();
  }
});

router.route('/risk').get(async (request, response) => {
  const { gender } = request.query;
  const { race } = request.query;
  if (!gender || !race) {
    response
      .status(400)
      .json({ message: 'Please include all required search parameters' });
  }
  console.log({ gender, race });
  const results = await School.find({
    [`SCH_IDEAENR_${race.toUpperCase()}_${gender.toUpperCase()}`]: { $gte: 5 },
  });
  return response.status(200).json({ results });
});

router
  .route('/')
  .get(controllers.getMany)
  .post(controllers.createOne)
  .put(controllers.updateOne)
  .delete(controllers.removeMany);

router.route('/:id').get(controllers.getOne).delete(controllers.removeOne);

module.exports = router;
