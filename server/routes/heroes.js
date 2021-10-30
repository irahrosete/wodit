import express from 'express'
import heroes from '../controllers/heroes.js'

const heroesRouter = express.Router()

heroesRouter.route('/seed').get(heroes.seed)
heroesRouter.route('/').get(heroes.getAll)

export default heroesRouter
