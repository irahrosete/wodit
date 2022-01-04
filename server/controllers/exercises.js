import Exercise from '../models/exercise.js'

import { formatDate } from '../utils/formatDate.js'

// get all exercises
const getAll = (req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json('Error ' + err))
}

// get exercises by date and user
const getByDateAndUser = (req, res) => {
  Exercise.find({
    date: req.query.date,
    username: req.query.username,
    userid: req.query.userid,
  })
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json('Error ' + err))
}

// get exercises by user
const getByUser = (req, res) => {
  Exercise.find({
    username: req.query.username,
    userid: req.query.userid,
  })
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json('Error ' + err))
}

// add an exercise
const add = (req, res) => {
  const userid = req.body.userid
  const username = req.body.username
  const activity = req.body.activity
  const rep = Number(req.body.rep)
  const date = formatDate(req.body.date)
  const newExercise = new Exercise({ userid, username, activity, rep, date })

  newExercise
    .save()
    .then(() => {
      res.json('Exercise added!')
    })
    .catch((err) => res.status(400).json('Error ' + err))
}

// update an exercise
const update = (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.userid = req.body.userid
      exercise.username = req.body.username
      exercise.activity = req.body.activity
      exercise.rep = Number(req.body.rep)
      exercise.date = formatDate(req.body.date)

      exercise
        .save()
        .then(() => res.json('Exercise updated!'))
        .catch((err) => res.status(400).json('Error ' + err))
    })
    .catch((err) => res.status(400).json('Error ' + err))
}

export default { getAll, getByDateAndUser, getByUser, add, update }
