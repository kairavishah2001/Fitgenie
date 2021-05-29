const express = require('express');
const router = express.Router();
const eat = require('./utils/eat');
const getDish = require('./utils/getDish');
const login = require('./utils/login');
const addToCart = require('./utils/addToCart');

router.get('/eat', eat.eat);
router.get('/getDish', getDish.getDish);
router.get('/addToCart', addToCart.addToCart);
router.get('/login', login.login)

module.exports = router;