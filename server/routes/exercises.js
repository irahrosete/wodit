import express from 'express'
import exercises from '../controllers/exercises.js'
import { isAuth } from '../utils/is-auth.js'

const exercisesRouter = express.Router()

exercisesRouter.route('/').get(exercises.getAll)
exercisesRouter.route('/query').get(exercises.getByDate)
exercisesRouter.route('/add').post(exercises.add)
exercisesRouter.route('/update/:id').post(exercises.update)

// get one
// exercisesRouter.route('/:id').get((req, res) => {
//   Exercise.findById(req.params.id)
//     .then((exercises) => res.json(exercises))
//     .catch((err) => res.status(400).json('Error ' + err))
// })

export default exercisesRouter
