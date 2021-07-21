const router = require('express').Router();
const kittenController = require('./controllers/kittenController');

router.route('/kittens')
    .get(kittenController.index)
    .post(kittenController.add);

// router.route('/kitten/:id')
//     .get(kittenConroller.view)
    // .patch(kittenController.update)
    // .put(kittenController.update)
    // .delete(kittenController.delete);

module.exports = router;