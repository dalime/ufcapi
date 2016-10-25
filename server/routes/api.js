const express = require('express');
const router = express.Router();

router.use('/characters', require('./characters'));

module.exports = router;
