import React, { useState } from 'react'
import { Donut } from 'react-dial-knob'

import DatePick from './DatePick'
import Footer from './Footer'

const EditExercise = () => {
  const [exercise, setExercise] = useState({
    username: '',
    activity: '',
    rep: 0,
    date: new Date(),
  })
  const [value, setValue] = useState(0)
  const handleClick = () => {
    console.log(value)
  }

  return (
    <>
      <DatePick exercise={exercise} setExercise={setExercise} />
      <div className='flex justify-center'>
        <h3 className='font-body tracking-wider text-2xl mb-6'>PUSH UPS</h3>
      </div>
      <div className='flex items-center justify-center knob-box'>
        <div className='box'>
          <div className='flex justify-center mt-5'>
            <Donut
              diameter={250}
              min={0}
              max={50}
              step={1}
              value={value}
              style={{ fontFamily: 'Antonio' }}
              theme={{
                donutColor: '#323232',
              }}
              onValueChange={setValue}
              ariaLabelledBy={'my-label'}
            ></Donut>
          </div>
          <div className='flex justify-center mt-5'>
            <button className='btn' onClick={handleClick}>
              add
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EditExercise
