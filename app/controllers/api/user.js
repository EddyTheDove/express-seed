import User from '../../models/user'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'

const UserController = {
    getUsers(req, res) {
        User.all((result) => {
            res.json(result)
        })
    },

    getUser(req, res) {
        User.show(req.params.id, (result) => {
            res.json(result)
        })
    },

    authenticate(req, res) {
        User.auth(req.body.email, (result) => {
            res.json(result)
        })
    }
}




export default UserController;
