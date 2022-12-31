var express = require('express')
var router = express.Router();
var HomerController = require('../controller/home')
let authMidlleware = require('../middlewares/auth.middleware')

router.get('/home', authMidlleware.requireAuth, HomerController.getHome)
router.get('/home/:id', authMidlleware.requireAuth, HomerController.getHomeViewPet)

router.get('/hot', authMidlleware.requireAuth, HomerController.getHot)

module.exports = router





