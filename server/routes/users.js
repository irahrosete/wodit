import express from 'express'
import users from '../controllers/users.js'

const usersRouter = express.Router()

usersRouter.route('/logout').get(users.logOutUser)
usersRouter.route('/signup').post(users.signUpUser)
usersRouter.route('/login').post(users.logInUser)
usersRouter.route('/:id').get(users.getById)

export default usersRouter
