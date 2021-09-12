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
      {exercises
        .map((exercise) => {
          return (
            <div className='mt-8 mx-32'>
              <p className='text-center font-body tracking-wider bg-wodGray border rounded border-wodDarkGray p-1'>
                {exercise.date}
              </p>
              <p className='text-center font-body tracking-wider text-2xl'>
                {exercise.rep}
              </p>
              <p className='uppercase text-sm text-center font-body tracking-wider'>
                {exercise.activity}
              </p>
            </div>
          )
        })
        .reverse()}
      <Footer />
    </div>
  )
}

export default Exercises
