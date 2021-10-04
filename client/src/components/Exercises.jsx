import React, { useState, useEffect } from 'react'
// import { Redirect } from 'react-router-dom'
import axios from 'axios'

import ENV_URL from '../config'

const Exercises = ({ component: Component, ...rest }) => {
  const [exercises, setExercises] = useState([])

  // update to filter for current user and protect page
  useEffect(() => {
    axios
      .get(`${ENV_URL}/api/exercises/`, { withCredentials: true })
      .then((res) => {
        setExercises(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className='mb-24 pt-16'>
      {exercises
        .map((exercise) => {
          return (
            <div className='pt-8 px-32' key={exercise._id}>
              <p className='text-center textWod bg-wodGray border rounded border-wodDarkGray p-1'>
                {exercise.date}
              </p>
              <p className='text-center textWod text-2xl'>{exercise.rep}</p>
              <p className='uppercase text-sm text-center textWod'>
                {exercise.activity}
              </p>
            </div>
          )
        })
        .reverse()}
    </div>
  )
}

export default Exercises
