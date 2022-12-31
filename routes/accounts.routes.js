var express = require('express')
var router = express.Router()
var AccountUsersController = require('../controller/accounts')
var middleware = require('../middlewares/auth.middleware')

router.get('/', middleware.requireAuth, middleware.requireAdmin, AccountUsersController.getAccount)
router.get('/view/:id', middleware.requireAuth, middleware.requireAdmin, AccountUsersController.getAccountView)
router.get('/delete/:id', middleware.requireAuth, middleware.requireAdmin, AccountUsersController.getAccountDel)
router.post('/delete/:id', middleware.requireAuth, middleware.requireAdmin, AccountUsersController.postAccountDel)



module.exports = router