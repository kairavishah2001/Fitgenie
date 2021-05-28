const { response } = require('express');
const express = require('express');
const router = express.Router();
const eat = require('./utils/eat');
const login = require('./utils/login');

router.get('/eat', eat.eat);

router.get('/login', login.login)

module.exports = router;