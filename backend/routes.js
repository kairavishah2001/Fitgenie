const express = require('express');
const router = express.Router();
const eat = require('./utils/eat');
const getDish = require('./utils/getDish');

router.get('/eat', eat.eat);
router.get('/getDish', getDish.getDish);

module.exports = router;