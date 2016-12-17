//load all controllers in this folder 
var HomeController = require('./home'),
    AuthController = require('./auth')

module.exports = {
    HomeController: HomeController,
    AuthController: AuthController
}
