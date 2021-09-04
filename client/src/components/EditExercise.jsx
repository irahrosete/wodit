import React, { useState } from 'react'

import DatePick from './DatePick'
import Footer from './Footer'

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
        <h3 className='font-body tracking-wider text-2xl mb-6'>PUSH UPS</h3>
      </div>
      <div className='box'></div>
      <Footer />
    </>
  )
}

export default EditExercise
