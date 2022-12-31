var express = require('express')
var router = express.Router();
var AdminController = require('../controller/admin')
var middleware = require('../middlewares/auth.middleware')

router.get('/admin', middleware.requireAuth, middleware.requireAdmin, AdminController.getAdmin)

router.get('/admin/add', middleware.requireAuth, middleware.requireAdmin, AdminController.getAdminAdd)
router.post('/admin/add', middleware.requireAuth, middleware.requireAdmin, AdminController.postAdminAdd)

router.get('/admin/view/:id', middleware.requireAuth, middleware.requireAdmin, AdminController.getAdminView)

router.get('/admin/delete/:id', middleware.requireAuth, middleware.requireAdmin, AdminController.getAdminDelete)
router.post('/admin/delete/:id', middleware.requireAuth, middleware.requireAdmin, AdminController.postAdminDelete)

router.get('/admin/edit/:id', middleware.requireAuth, middleware.requireAdmin, AdminController.getAdminEdit)
router.post('/admin/edit/:id', middleware.requireAuth, middleware.requireAdmin, AdminController.postAdminEdit)

module.exports = router