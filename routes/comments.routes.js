var express = require('express')
var router = express.Router()
var middleware = require('../middlewares/auth.middleware')
var commentController = require('../controller/comments')

router.post('/:id',middleware.requireAuth, commentController.postComment)
router.post('/remove/:id/:index',middleware.requireAuth, commentController.postCommentDel)

module.exports = router