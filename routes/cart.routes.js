var express = require('express')
var router = express.Router();
var CartController = require('../controller/cart')
let authMidlleware = require('../middlewares/auth.middleware')

router.get('/', authMidlleware.requireAuth, CartController.getCart)
router.post('/del/:indexpet', authMidlleware.requireAuth, CartController.postCartdel)

router.post('/:id', authMidlleware.requireAuth, CartController.postCart)

module.exports = router