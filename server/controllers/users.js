import User from '../models/user.js'
import { handleErrors } from '../utils/handle-errors.js'
import { createToken, maxAge } from '../utils/create-token.js'
import jwt from 'jsonwebtoken'

// create new user
// const signUpUser = async (req, res) => {
//   const { username, email, password } = req.body

//   try {
//     const user = await User.create({ username, email, password })
//     const token = createToken({ userid: user._id, username: user.username })
//     res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
//     res.status(201).json({ userid: user._id, username: user.username })
//   } catch (err) {
//     const errors = handleErrors(err)
//     res.status(400).json({ errors })
//   }
// }

// const signUpUser = (req, res) => {
//   const newUser = new User(req.body)
//   newUser.save((err, user) => {
//     if (err) {
//       const errors = handleErrors(err)
//       res.status(400).json({ errors })
//     }
//     const token = createToken({ userid: user._id, username: user.username })
//     res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 }) // cookie expects time in millisecond
//     res.status(201).json({ userid: user._id, username: user.username })
//   })
// }

const signUpUser = (req, res) => {
  const { username, email, password } = req.body
  const user = User.create({ username, email, password })

  user
    .then((response) => {
      const token = createToken({
        userid: response._id,
        username: response.username,
      })
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 }) // cookie expects time in millisecond
      res.status(201).json({
        id: response.id,
        username: response.username,
        email: response.email,
      })
      console.log({
        id: response.id,
        username: response.username,
        email: response.email,
      })
    })
    .catch((err) => {
      const errors = handleErrors(err)
      res.status(400).json({ errors })
      console.log(errors)
    })
}

// authenticate existing user
// const logInUser = (req, res) => {
//   const { email, password } = req.body

//   User.findOne({ email }, (err, user) => {
//     if (err) {
//       const errors = handleErrors(err)
//       res.status(400).json({ errors })
//     }
//     if (!user || !user.comparePassword(password)) {
//       res.status(400).json({ message: 'Authentication failed' })
//     }
//     const token = createToken({ userid: user._id, username: user.username })
//     res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 }) // cookie expects time in millisecond
//     res.status(200).json({ userid: user._id, username: user.username })
//   })
// }

const logInUser = (req, res) => {
  const { email, password } = req.body

  const user = User.login(email, password)

  user
    .then((response) => {
      const token = createToken({
        userid: response._id,
        username: response.username,
      })
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 }) // cookie expects time in millisecond, jwt expects time in seconds
      res.status(200).json({
        id: response.id,
        username: response.username,
        email: response.email,
      })
      console.log({
        id: response.id,
        username: response.username,
        email: response.email,
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
  res.cookie('jwt', '', { httpOnly: true, maxAge: 1 }) // replace cookie with a blank jwt
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
  const user = User.findOne({ _id: claim._id })
  user
    .then((response) => {
      // res.status(200).json(response)
      console.log(response)
    })
    .catch((err) => res.status(400).json('Error ' + err))

  // res.send(cookie)
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
