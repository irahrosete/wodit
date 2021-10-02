import Exercise from '../models/exercise.js'

// get all exercises
const getAll = (req, res) => {
  Exercise.find({ userid: req.user.userid })
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json('Error ' + err))
}

// get exercises by date and user
const getByDateAndUser = (req, res) => {
  Exercise.find({ date: req.query.date, user: req.query.user })
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json('Error ' + err))
}

// add an exercise
const add = (req, res) => {
  const userid = req.user.userid
  const username = req.user.username
  const activity = req.body.activity
  const rep = Number(req.body.rep)
  const date = req.body.date.toString().substring(0, 10)

  const newExercise = new Exercise({ userid, username, activity, rep, date })

  newExercise
    .save()
    .then(() => {
      res.json('Exercise added!')
    })
    .catch((err) => res.status(400).json('Error ' + err))
}

// update an exercise
const update = (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.userid = req.user.userid
      exercise.username = req.user.username
      exercise.activity = req.body.activity
      exercise.rep = Number(req.body.rep)
      exercise.date = req.body.date.toString().substring(0, 10)

      exercise
        .save()
        .then(() => res.json('Exercise updated!'))
        .catch((err) => res.status(400).json('Error ' + err))
    })
    .catch((err) => res.status(400).json('Error ' + err))
}

export default { getAll, getByDateAndUser, add, update }
