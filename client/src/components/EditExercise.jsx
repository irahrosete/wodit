import React, { useState } from 'react'

import DatePick from './DatePick'

const EditExercise = () => {
  const [exercise, setExercise] = useState({
    username: '',
    activity: '',
    rep: 0,
    date: new Date(),
  })

  return (
    <>
      <DatePick exercise={exercise} setExercise={setExercise} />
      <div className='flex justify-center'>
        <h3 className='font-body tracking-wider text-2xl'>PUSH UPS</h3>
      </div>
    </>
  )
}

export default EditExercise
