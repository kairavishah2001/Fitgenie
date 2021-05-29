const express = require('express');
const router = express.Router();
const eat = require('./utils/eat');
const getDish = require('./utils/getDish');
const login = require('./utils/login');
const profile = require('./utils/profile');
const signUp = require('./utils/signUp');

router.get('/eat', eat.eat);
router.get('/getDish', getDish.getDish);
router.get('/login', login.login);
router.get('/profile', profile.profile);

router.post('/signUp', signUp.signUp);
module.exports = router;