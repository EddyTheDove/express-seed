var express = require('express')
var controllers = require('../controllers/api')
var router = express.Router()

router.get('/', controllers.UserController.getUser)

module.exports = router
