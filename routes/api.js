import express from 'express'
import controllers from '../app/controllers/api'

let app = express()
let router = express.Router();
router.get('/users', controllers.MemberController.getMembers)
router.get('/users/:id', controllers.UserController.getUser)
router.post('/authenticate', controllers.UserController.authenticate)

export default router
