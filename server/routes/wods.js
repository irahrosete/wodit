import express from 'express'
import wods from '../controllers/wods.js'
import { isAuth } from '../utils/is-auth.js'

const wodsRouter = express.Router()

// exercisesRouter.use(isAuth)

wodsRouter.route('/').get(wods.getAll)
wodsRouter.route('/query').get(wods.getByDateAndUser)
wodsRouter.route('/get').get(wods.getByUser)
wodsRouter.route('/add').post(wods.add)
wodsRouter.route('/update/:id').post(wods.update)

export default wodsRouter
