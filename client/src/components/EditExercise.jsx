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

  const [rep, setRep] = useState(0)
  const handleClick = () => {
    setExercise({ ...exercise, rep })
  }

  console.log(exercise, rep)

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
              value={rep}
              style={{ fontFamily: 'Antonio' }}
              theme={{
                donutColor: '#323232',
              }}
              onValueChange={setRep}
              ariaLabelledBy={'my-label'}
            ></Donut>
          </div>
          <div className='flex justify-between'>
            <div className='ml-5 mt-5 w-10'>
              <button className='btn' onClick={handleClick}>
                remove
              </button>
            </div>
            <div className='mr-5 mt-5'>
              <button className='btn' onClick={handleClick}>
                add
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EditExercise
