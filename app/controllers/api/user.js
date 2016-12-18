
var UserController = {}

UserController.getUser = function() {
    res.json({
        name: 'John Doe',
        email: 'john@email.com',
        is_active: true
    })
}


module.exports = UserController
