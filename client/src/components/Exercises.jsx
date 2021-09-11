import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ENV_URL from '../config'

import Footer from './Footer'

const Exercises = () => {
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    axios
      .get(`${ENV_URL}/api/exercises/`)
      .then((res) => {
        setExercises(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      {exercises.map((exercise) => {
        return (
          <>
            {' '}
            <p>{exercise.date}</p>
            <p>{exercise.activity}</p>
            <p>{exercise.rep}</p>
          </>
        )
      })}
      <Footer />
    </div>
  )
}

export default Exercises
