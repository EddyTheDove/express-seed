

import env from '../../../env';
let UserController = {};

UserController.getUser = function(req, res) {
    res.json({
        name: 'John Doe',
        email: 'john@email.com',
        is_active: true
    })
}

module.exports = UserController;
