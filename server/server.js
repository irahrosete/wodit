import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
// import cookieParser from 'cookie-parser'

import MONGODB_URL from './config.js'
import exercisesRouter from './routes/exercises.js'
import usersRouter from './routes/users.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000

// middleware
app.use(cors())
app.use(express.json())
// app.use(cookieParser())

mongoose.connect(process.env.MONGODB_URL || MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
})

const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
  console.log(MONGODB_URL)
})

app.get('/', (req, res) => {
  res.status(200).send('Hello from WODit server')
})

// routes
app.use('/api/exercises', exercisesRouter)
app.use('/api/users', usersRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
