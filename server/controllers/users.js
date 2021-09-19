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
  const user = User.create({ username, email, password })
  const token = createToken(user._id)
  res.cookie('jwt', token, { maxAge: maxAge * 1000 }) // cookie expects time in millisecond

  user
    .then((response) => {
      res.status(201).json({ user: response.username })
      console.log({ user: response.username })
    })
    .catch((err) => {
      const errors = handleErrors(err)
      res.status(400).json({ errors })
      console.log(errors)
    })
}

// authenticate current user
const logInUser = (req, res) => {
  const { email, password } = req.body
  const user = User.login(email, password)
  const token = createToken(user._id)
  res.cookie('jwt', token, { maxAge: maxAge * 1000 }) // cookie expects time in millisecond

  user
    .then((response) => {
      res.status(200).json({ user: response.username })
      console.log({ user: response.username })
    })
    .catch((err) => {
      const errors = handleErrors(err)
      res.status(400).json({ errors })
      console.log(errors)
    })
}

// get user by id
const getById = (req, res) => {
  User.findById(req.params.id)
    .then((response) => {
      res.status(200).json(response)
      console.log(response)
    })
    .catch((err) => res.status(400).json('Error ' + err))
}

export default { signUpPage, logInPage, signUpUser, logInUser, getById }
