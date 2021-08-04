const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
  response.status(200).json({ message: 'this is the way' });
});

module.exports = router;
