import express from 'express'
import users from '../controllers/users.js'

const usersRouter = express.Router()

usersRouter.route('/signup').post(users.signUpUser)
usersRouter.route('/login').post(users.logInUser)

export default usersRouter

// -----
// import express from 'express'
// import users from '../controllers/users.js'

// const usersRouter = express.Router()

// usersRouter.route('/signup').post(users.signUpUser)
// usersRouter.route('/login').post(users.logInUser)
// usersRouter.route('/logout').get(users.logOutUser)
// usersRouter.route('/user').get(users.getUser)
// usersRouter.route('/:id').get(users.getById)

// export default usersRouter
