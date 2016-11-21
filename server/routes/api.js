const express = require('express');
const router = express.Router();

router.use('/events', require('./events'));
router.use('/fighters', require('./fighters'));
router.use('/teams', require('./teams'));

module.exports = router;
