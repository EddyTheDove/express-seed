import express from 'express'
import controllers from '../app/controllers/api'

let router = express.Router();
router.get('/api/users', controllers.UserController.getUsers)
router.get('/api/users/:id', controllers.UserController.getUser)

export default router
