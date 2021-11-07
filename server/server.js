import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import MONGODB_URL from './config.js'
import exercisesRouter from './routes/exercises.js'
import wodsRouter from './routes/wods.js'
import usersRouter from './routes/users.js'
import girlsRouter from './routes/girls.js'
import heroesRouter from './routes/heroes.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000

// middleware
app.use(
  cors({ origin: true, credentials: true })
  // {
  // exposedHeaders: ['set-cookie'],
  // origin: 'http:localhost:4000',
  // credentials: true,
  // }
)

// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET, POST, OPTIONS, PUT, PATCH, DELETE'
//   )
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
//   res.setHeader('Access-Control-Allow-Credentials', true)
//   next()
// })

app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.MONGODB_URL || MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

app.get('/', (req, res) => {
  res.status(200).send('Hello from WODit server')
})

// routes
app.use('/api/exercises', exercisesRouter)
app.use('/api/wods', wodsRouter)
app.use('/api/users', usersRouter)
app.use('/api/girls', girlsRouter)
app.use('/api/heroes', heroesRouter)

// app.get('/set-cookies', (req, res) => {
//   // res.setHeader('Set-Cookie', 'newUser=true')
//   res.cookie('newUser', false)
//   res.cookie('isEmployee', true, {
//     maxAge: 1000 * 60 * 60 * 24,
//     httpOnly: true,
//   })
//   res.send('you got the cookies!')
// })

// app.get('/read-cookies', (req, res) => {
//   const cookies = req.headers.cookie
//   console.log(cookies)
//   res.json(cookies)
// })

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
