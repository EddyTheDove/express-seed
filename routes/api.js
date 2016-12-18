var express = require('express')
var controllers = require('../app/controllers/api')
var router = express.Router()

router.get('/api', controllers.UserController.getUser)

module.exports = router
