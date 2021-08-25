const express = require('express');
const controllers = require('./gender.controller');

const router = express.Router();
router.route('/').get(controllers.getMany);
//   .post(controllers.createOne)
//   .delete(controllers.deleteMany);

router.route('/:id').get(controllers.getOne);
//   .put(controllers.updateOne)
//   .delete(controllers.deleteOne);

module.exports = router;
