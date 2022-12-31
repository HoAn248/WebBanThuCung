var express = require('express')
var router = express.Router()
var AboutController = require('../controller/about')

router.get('/', AboutController.getAbout)

module.exports = router