import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import exercisesRouter from './routes/exercises.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

app.get('/', (req, res) => {
  res.status(200).send('Hello from WODit server')
})

app.use('/api/exercises', exercisesRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
