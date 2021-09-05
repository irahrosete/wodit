import React, { useState } from 'react'
import { Donut } from 'react-dial-knob'

import DatePick from './DatePick'
import Footer from './Footer'
import Alert from './Alert'

import thumbup from '../img/thumb-up.js'
import thumbdown from '../img/thumb-down'

const EditExercise = () => {
  const [exercise, setExercise] = useState({
    username: '',
    activity: '',
    rep: 0,
    date: new Date(),
  })

  const [rep, setRep] = useState(0)
  console.log(exercise, rep)

  const [addAlert, setAddAlert] = useState(false)
  const [removeAlert, setRemoveAlert] = useState(false)

  const handleAdd = () => {
    setExercise({ ...exercise, rep })

    setTimeout(() => {
      setAddAlert(true)
    }, 0)
    setTimeout(() => {
      setAddAlert(false)
    }, 3000)
  }

  const handleRemove = () => {
    setExercise({ ...exercise, rep })

    setTimeout(() => {
      setRemoveAlert(true)
    }, 0)
    setTimeout(() => {
      setRemoveAlert(false)
    }, 3000)
  }

  return (
    <>
      {addAlert && (
        <Alert
          icon={thumbup}
          message={`You've added ${rep} reps to your push ups!`}
        />
      )}
      {removeAlert && (
        <Alert
          icon={thumbdown}
          message={`You've removed ${rep} reps from your push ups!`}
        />
      )}

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
              <button className='btn' onClick={handleRemove}>
                remove
              </button>
            </div>
            <div className='mr-5 mt-5'>
              <button className='btn' onClick={handleAdd}>
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
