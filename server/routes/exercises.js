import express from 'express'
import Exercise from '../models/exercise.js'

const exercisesRouter = express.Router()

exercisesRouter.route('/').get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json('Error ' + err))
})

exercisesRouter.route('/add').post((req, res) => {
  const firstName = req.body.firstName
  const activity = req.body.activity
  const rep = Number(req.body.rep)
  const date = Date.parse(req.body.date)

  const newExercise = new Exercise({ firstName, activity, rep, date })

  newExercise
    .save()
    .then(() => res.json('Exercise added!'))
    .catch((err) => res.status(400).json('Error ' + err))
})

export default exercisesRouter
