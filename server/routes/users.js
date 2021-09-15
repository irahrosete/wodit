import express from 'express'
import users from '../controllers/users.js'

const usersRouter = express.Router()

usersRouter.route('/signup').get(users.signUpPage)
usersRouter.route('/login').get(users.logInPage)
usersRouter.route('/signup').post(users.signUpUser)
usersRouter.route('/login').post(users.logInUser)

export default usersRouter
