
let AuthController = {
    //Sign Up
    getSignup(req, res) {
        res.render('auth/signup')
    },


    doSignup(req, res) {
        res.json({
            params: req.params
        })
    },

    //Sign In
    getSignin(req, res) {
        res.render('auth/signin')
    },

    doSignin(req, res) {
        res.json({
            params: req.params
        })
    }
}




export default AuthController;
