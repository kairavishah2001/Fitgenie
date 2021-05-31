const express = require('express');
const router = express.Router();
const eat = require('./utils/eat');
const getDish = require('./utils/getDish');
const login = require('./utils/login');
const profile = require('./utils/profile');
const signUp = require('./utils/signUp');
const addToCart = require('./utils/addToCart');
const getList = require('./utils/getList');
const appointment = require('./utils/appointment');
const scheduleList = require('./utils/scheduleList');
const getSchedule = require('./utils/getSchedule');
const addSchedule = require('./utils/addSchedule');

router.get('/eat', eat.eat);
router.get('/getDish', getDish.getDish);
router.get('/login', login.login);
router.get('/profile', profile.profile);
router.get('/getList', getList.getList);
router.get('/addToCart', addToCart.addToCart);
router.get('/scheduleList', scheduleList.scheduleList);
router.get('/getSchedule', getSchedule.getSchedule);

router.post('/addSchedule', addSchedule.addSchedule);
router.post('/signUp', signUp.signUp);
router.post('/appointment', appointment.appointment);

module.exports = router;