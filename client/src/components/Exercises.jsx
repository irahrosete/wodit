import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ENV_URL from '../config'

const Exercises = () => {
  const [exercises, setExercises] = useState([])

  // update to filter for current user
  useEffect(() => {
    axios
      .get(`${ENV_URL}/api/exercises/`)
      .then((res) => {
        setExercises(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  // get user
  // useEffect(() => {
  //   axios
  //     .get(`${ENV_URL}/api/users/`)
  //     .then((res) => {
  //       setExercises(res.data)
  //     })
  //     .catch((err) => console.log(err))
  // }, [])

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
