import User from '../models/user.js'
import { handleErrors } from '../utils/handle-errors.js'

// get sign up page
const signUpPage = (req, res) => {
  res.send('signing up user')
}

// get log in page
const logInPage = (req, res) => {
  res.send('logging in user')
}

// create new user
const signUpUser = (req, res) => {
  const { username, email, password } = req.body
  User.create({ username, email, password })
    .then(() => res.status(201).json('User created!'))
    .catch((err) => {
      const errors = handleErrors(err)
      res.status(400).json({ errors })
    })
}

// authenticate current user
const logInUser = (req, res) => {
  const { username, email, password } = req.body
  res.send('user log in')
}

export default { signUpPage, logInPage, signUpUser, logInUser }
