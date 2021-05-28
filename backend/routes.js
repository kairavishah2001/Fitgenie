const express = require('express');
const router = express.Router();
const eat = require('./utils/eat');

router.get('/eat', eat.eat);

module.exports = router;