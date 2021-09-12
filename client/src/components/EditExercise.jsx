import React, { useState } from 'react'
import { Donut } from 'react-dial-knob'
import axios from 'axios'

import DatePick from './DatePick'
import Footer from './Footer'
import Alert from './Alert'

import thumbup from '../img/thumb-up'
import thumbdown from '../img/thumb-down'
import ENV_URL from '../config'

const EditExercise = () => {
  const [exercise, setExercise] = useState({
    firstName: 'irah',
    activity: 'push ups',
    rep: 0,
    date: new Date(),
    // new Date().getFullYear(),
    // new Date().getMonth(),
    // new Date().getDate()
  })

  const [rep, setRep] = useState(0)
  const [existingRep, setExistingRep] = useState(0)
  const [removeRep, setRemoveRep] = useState(0)

  const [addAlert, setAddAlert] = useState(false)
  const [removeAlert, setRemoveAlert] = useState(false)

  const handleAdd = (e) => {
    setTimeout(() => {
      setAddAlert(true)
    }, 0)
    setTimeout(() => {
      setAddAlert(false)
    }, 3000)

    console.log(exercise.date.toISOString().substring(0, 10))

    axios
      .get(
        `${ENV_URL}/api/exercises/query?date=${exercise.date
          .toISOString()
          .substring(0, 10)}`
      )
      .then((res) => {
        const existingExercise = res.data[0]

        if (existingExercise) {
          const newRep = rep + existingExercise.rep
          axios
            .post(`${ENV_URL}/api/exercises/update/${existingExercise._id}`, {
              ...existingExercise,
              rep: newRep,
            })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
          console.log({ ...existingExercise, rep: newRep })
        } else {
          // console.log('no exercise for this date')
          axios
            .post(`${ENV_URL}/api/exercises/add`, { ...exercise, rep })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
        }
      })
      .catch((err) => console.log(err))
  }

  const handleRemove = (e) => {
    setTimeout(() => {
      setRemoveAlert(true)
    }, 0)
    setTimeout(() => {
      setRemoveAlert(false)
    }, 3000)

    console.log(exercise.date.toISOString().substring(0, 10))

    axios
      .get(
        `${ENV_URL}/api/exercises/query?date=${exercise.date
          .toISOString()
          .substring(0, 10)}`
      )
      .then((res) => {
        const existingExercise = res.data[0]

        if (existingExercise.rep >= rep) {
          const newRep = existingExercise.rep - rep
          axios
            .post(`${ENV_URL}/api/exercises/update/${existingExercise._id}`, {
              ...existingExercise,
              rep: newRep,
            })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
          console.log({ ...existingExercise, rep: newRep })
        } else {
          console.log('existing exercise for this date is less')
          setExistingRep(existingExercise.rep)
          setRemoveRep(rep)
        }
      })
      .catch((err) => console.log(err))
  }
  console.log(existingRep, removeRep)

  return (
    <>
      <DatePick exercise={exercise} setExercise={setExercise} />

      {addAlert && (
        <Alert
          icon={thumbup}
          message={`You've added ${rep} reps to your push ups!`}
        />
      )}
      {removeAlert && (
        <Alert
          icon={thumbdown}
          message={
            existingRep < removeRep
              ? `Unable to remove more than your existing reps`
              : `You've removed ${rep} reps from your push ups!`
          }
        />
      )}

      <div className='flex justify-center'>
        <h3 className='textWod text-2xl mb-6'>PUSH UPS</h3>
      </div>
      <div className='flex items-center justify-center'>
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
              <button className='btn bg-wodGray' onClick={handleRemove}>
                remove
              </button>
            </div>
            <div className='mr-5 mt-5'>
              <button className='btn bg-wodYellow' onClick={handleAdd}>
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
