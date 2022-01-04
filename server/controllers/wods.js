import Wod from '../models/wod.js'
import { formatDate } from '../utils/format-date.js'

// get all wods
const getAll = (req, res) => {
  Wod.find()
    .then((wods) => res.json(wods))
    .catch((err) => res.status(400).json('Error ' + err))
}

// get wods by date and user
const getByDateAndUser = (req, res) => {
  Wod.find({
    date: req.query.date,
    username: req.query.username,
    userid: req.query.userid,
  })
    .then((wods) => res.json(wods))
    .catch((err) => res.status(400).json('Error ' + err))
}

// get wods by user
const getByUser = (req, res) => {
  Wod.find({
    username: req.query.username,
    userid: req.query.userid,
  })
    .then((wods) => res.json(wods))
    .catch((err) => res.status(400).json('Error ' + err))
}

// add a wod
const add = (req, res) => {
  const userid = req.body.userid
  const username = req.body.username
  const warmup = req.body.warmup
  const workout = req.body.workout
  const date = formatDate(req.body.date)

  const newWod = new Wod({ userid, username, warmup, workout, date })

  newWod
    .save()
    .then(() => {
      res.json('Wod added!')
    })
    .catch((err) => res.status(400).json('Error ' + err))
}

// update a wod
const update = (req, res) => {
  Wod.findById(req.params.id)
    .then((wod) => {
      wod.userid = req.body.userid
      wod.username = req.body.username
      wod.warmup = req.body.warmup
      wod.workout = req.body.workout
      wod.date = formatDate(req.body.date)

      wod
        .save()
        .then(() => res.json('Wod updated!'))
        .catch((err) => res.status(400).json('Error ' + err))
    })
    .catch((err) => res.status(400).json('Error ' + err))
}

export default { getAll, getByDateAndUser, getByUser, add, update }
