import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ENV_URL from '../config'
import { sortDate } from '../utils/sort'

const Exercises = ({ component: Component, ...rest }) => {
  const [exercises, setExercises] = useState([])
  const user = {
    userid: localStorage.getItem('userid') || '',
    username: localStorage.getItem('username') || '',
  }

  useEffect(() => {
    user.username
      ? axios
          .get(
            `${ENV_URL}/api/exercises/get?userid=${user.userid}&username=${user.username}`
          )
          .then((res) => {
            setExercises(sortDate(res.data).reverse())
          })
          .catch((err) => console.log(err))
      : window.location.assign('/login')
  }, [user.userid, user.username])

  return (
    <div className='mb-24 pt-24'>
      <div className='flex flex-col items-center'>
        <h2 className='textWod text-2xl mb-6 uppercase'>Push ups</h2>
      </div>
      {exercises.map((exercise) => {
        return (
          <div className='px-32 mb-4' key={exercise._id}>
            <p className='text-center textWod bg-wodGray border rounded border-wodDarkGray p-1'>
              {exercise.date}
            </p>
            <p className='text-center textWod text-2xl'>{exercise.rep}</p>
            <p className='uppercase text-sm text-center textWod'>
              {/* {exercise.activity} */}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Exercises
