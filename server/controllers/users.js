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
const signUpUser = async (req, res) => {
  const { _id, username, email, password } = req.body
  try {
    const user = await User.create({ username, email, password })
    const token = createToken(iser._id)
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 }) // cookie expects time in millisecond
    res.status(201).json({ user: _id })
  } catch (err) {
    const errors = handleErrors(err)
    res.status(400).json({ errors })
  }

  // User.create({ username, email, password })
  //   .then(() => {
  //     res.status(201).json({ user: _id })
  //   })
  //   .catch((err) => {
  //     const errors = handleErrors(err)
  //     res.status(400).json({ errors })
  //   })
}

// authenticate current user
const logInUser = (req, res) => {
  const { username, email, password } = req.body
  res.send('user log in')
}

export default { signUpPage, logInPage, signUpUser, logInUser }
