import models from '../../models'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'

let Member = models.Member

const MemberController = {
    getMembers(req, res) {
        Member.findAll()
        .then((result) => {
            res.json(result)
        })
    },

    authenticate(req, res) {
        User.auth(req.body.email, (result) => {
            res.json(result)
        })
    }
}




export default MemberController;
