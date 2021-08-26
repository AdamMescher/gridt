const express = require('express');
const controllers = require('./state.controller');

const router = express.Router();

router
  .route('/')
  .get(controllers.getMany)
  .post(controllers.createOne)
  .put(controllers.updateOne);

router.route('/:id').get(controllers.getOne).delete(controllers.removeOne);

module.exports = router;
