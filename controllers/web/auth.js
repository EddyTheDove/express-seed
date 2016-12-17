
var AuthController = {}

//Sign Up
AuthController.getSignup = function(req, res) {
    res.render('auth/signup')
}

AuthController.doSignup = function(req, res) {
    res.json({
        params: req.params
    })
}


//Sign In
AuthController.getSignin = function(req, res) {
    res.render('auth/signin')
}

AuthController.doSignin = function(req, res) {
    res.json({
        params: req.params
    })
}


module.exports = AuthController;
