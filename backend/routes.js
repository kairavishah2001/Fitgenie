const express = require('express');
const router = express.Router();
const eat = require('./utils/eat');
const getDish = require('./utils/getDish');
const login = require('./utils/login');

router.get('/eat', eat.eat);
router.get('/getDish', getDish.getDish);

router.get('/login', login.login)

module.exports = router;