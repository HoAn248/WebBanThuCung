var express = require('express')
var router = express.Router();
var UserControll = require('../controller/users')


router.get('/login', UserControll.getLogin)
router.post('/login', UserControll.postLogin)

router.get('/regis', UserControll.getRegis)
router.post('/regis', UserControll.postRegis)

module.exports = router