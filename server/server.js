import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import MONGODB_URL from './config.js'
import exercisesRouter from './routes/exercises.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL || MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
  console.log(MONGODB_URL)
})

app.get('/', (req, res) => {
  res.status(200).send('Hello from WODit server')
})

app.use('/api/exercises', exercisesRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
