import jwt from 'jsonwebtoken'
import User from '../models/user.js'
import { handleErrors } from '../utils/handle-errors.js'

// jwt expects time in seconds
const maxAge = 24 * 60 * 60 // 1 day
const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: maxAge,
  })
}

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
  const newUser = User.create({ username, email, password })
  const token = createToken(newUser._id)
  res.cookie('jwt', token, { maxAge: maxAge * 1000 }) // cookie expects time in millisecond

  newUser
    .then((response) => {
      res.status(201).json({ user: response.username })
      console.log({ user: response.username })
    })
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
