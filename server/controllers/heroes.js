import Hero from '../models/hero.js'
import { data } from '../utils/seedHeroes.js'

// seed heroes db
const seed = (req, res) => {
  const seededHeroes = Hero.insertMany(data)
    .then(() => res.send(seededHeroes))
    .catch((err) => res.status(400).json('Error ' + err))
}

// get all heroes
const getAll = (req, res) => {
  Hero.find()
    .then((heroes) => res.json(heroes))
    .catch((err) => res.status(400).json('Error ' + err))
}

export default { seed, getAll }
