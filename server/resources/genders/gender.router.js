const express = require('express');
const controllers = require('./gender.controller');

const router = express.Router();

router
  .route('/')
  .get(controllers.getMany)
  .post(controllers.createOne)
  .put(controllers.updateOne)
  .delete(controllers.removeMany);
//   .post(controllers.createOne)

router.route('/:id').get(controllers.getOne).delete(controllers.removeOne);

module.exports = router;
