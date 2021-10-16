import express from 'express'
import girls from '../controllers/girls.js'

const girlsRouter = express.Router()

girlsRouter.route('/seed').get(girls.seed)
girlsRouter.route('/').get(girls.getAll)

export default girlsRouter
