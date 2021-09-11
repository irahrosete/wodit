import express from 'express'
import Exercise from '../models/exercise.js'

const exercisesRouter = express.Router()

// get all
exercisesRouter.route('/').get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json('Error ' + err))
})

// get one
exercisesRouter.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json('Error ' + err))
})

// add
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

// update
exercisesRouter.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.firstName = req.body.firstName
      exercise.activity = req.body.activity
      exercise.rep = Number(req.body.rep)
      exercise.date = Date.parse(req.body.date)

      exercise
        .save()
        .then(() => res.json('Exercise updated!'))
        .catch((err) => res.status(400).json('Error ' + err))
    })
    .catch((err) => res.status(400).json('Error ' + err))
})

export default exercisesRouter
