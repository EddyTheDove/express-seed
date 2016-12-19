import User from '../models/user';

const UserController = {
    getUsers(req, res) {
        User.all(req, res);
    },

    getUser(req, res) {
        User.show(req, res);
    }
};




export default UserController;
