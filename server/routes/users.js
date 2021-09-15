import express from 'express'
import users from '../controllers/users.js'

const usersRouter = express.Router()

usersRouter.route('/signup').get(users.signUpGet)
usersRouter.route('/login').get(users.logInGet)
usersRouter.route('/signup').post(users.signUpPost)
usersRouter.route('/login').post(users.logInPost)

export default usersRouter
