import User from '../models/user.js'
import { handleErrors } from '../utils/handle-errors.js'
import { createToken, maxAge } from '../utils/create-token.js'
import jwt from 'jsonwebtoken'

// create new user
const signUpUser = (req, res) => {
  const { username, email, password } = req.body
  const user = User.create({ username, email, password })

  user
    .then((response) => {
      const token = createToken({
        id: response._id,
        username: response.username,
      })
      // cookie expects time in millisecond
      // res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
      res.status(201).json({
        id: response.id,
        username: response.username,
        jwt: token,
      })
    })
    .catch((err) => {
      const errors = handleErrors(err)
      res.status(400).json({ errors })
      console.log(errors)
    })
}

// authenticate existing user
const logInUser = (req, res) => {
  const { email, password } = req.body
  const user = User.login(email, password)

  user
    .then((response) => {
      const token = createToken({
        id: response._id,
        username: response.username,
      })
      // cookie expects time in millisecond, jwt expects time in seconds
      // res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
      res.status(200).json({
        id: response.id,
        username: response.username,
        jwt: token,
      })
    })
    .catch((err) => {
      const errors = handleErrors(err)
      res.status(400).json({ errors })
      console.log(errors)
    })
}

// log current user out
const logOutUser = (req, res) => {
  // res.cookie('jwt', '', { httpOnly: true, maxAge: 1 }) // replace cookie with a blank jwt
  res.status(200).json('')
}

// get logged in user
const getUser = (req, res) => {
  const cookie = req.cookies.jwt
  const claim = jwt.verify(cookie, process.env.SECRET)
  console.log(claim)
  if (!claim) {
    return res.status(401).json('Unauthenticated user')
  }
  const user = User.findOne({ _id: claim.userid })
  user
    .then((response) => {
      res.status(200).json(response)
      console.log(response)
    })
    .catch((err) => res.status(400).json('Error ' + err))
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

export default {
  signUpUser,
  logInUser,
  logOutUser,
  getUser,
  getById,
}
