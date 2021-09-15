// import Exercise from '../models/exercise.js'

const signUpGet = (req, res) => {
  res.send('signing up user')
}

const logInGet = (req, res) => {
  res.send('logging in user')
}

const signUpPost = (req, res) => {
  res.send('new user sign up')
}

const logInPost = (req, res) => {
  res.send('user log in')
}

export default { signUpGet, logInGet, signUpPost, logInPost }
