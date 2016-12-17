var express = require('express')
var controllers = require('../controllers/web')
var router = express.Router()



router.get('/', controllers.HomeController.getHome)

//sign up
router.route('signup')
    .get( controllers.AuthController.getSignup )
    .post( controllers.AuthController.doSignup )

//sign in
router.route('signin')
    .get( controllers.AuthController.getSignin )
    .post( controllers.AuthController.doSignin )


//Route group protected by middleware
router.all('app/*', function(req, res, next) {
    //do middleware check here
    next()
})


//export module 
module.exports = router
