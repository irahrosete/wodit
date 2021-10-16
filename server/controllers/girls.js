import Girl from '../models/girl.js'
import { data } from '../utils/seedGirls.js'

// seed girls db
const seed = (req, res) => {
  const seededGirls = Girl.insertMany(data)
    .then(() => res.send(seededGirls))
    .catch((err) => res.status(400).json('Error ' + err))
}

// get all girls
const getAll = (req, res) => {
  Girl.find()
    .then((girls) => res.json(girls))
    .catch((err) => res.status(400).json('Error ' + err))
}

export default { seed, getAll }
