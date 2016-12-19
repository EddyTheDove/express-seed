import User from '../models/user';

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
    }
}




export default UserController;
