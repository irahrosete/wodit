import express from 'express'
import exercises from '../controllers/exercises.js'
import { isAuth } from '../utils/is-auth.js'

const exercisesRouter = express.Router()

// exercisesRouter.use(isAuth)

exercisesRouter.route('/').get(exercises.getAll)
exercisesRouter.route('/query').get(exercises.getByDateAndUser)
exercisesRouter.route('/get').get(exercises.getByUser)
exercisesRouter.route('/add').post(exercises.add)
exercisesRouter.route('/update/:id').post(exercises.update)

export default exercisesRouter
