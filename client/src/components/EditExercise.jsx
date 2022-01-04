import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Donut } from 'react-dial-knob'
import axios from 'axios'

import DatePick from './DatePick'
import Alert from './Alert'

import thumbup from '../img/thumb-up'
import thumbdown from '../img/thumb-down'
import ENV_URL from '../config'
import { formatDate } from '../utils/format-date'

const EditExercise = () => {
  const [exercise, setExercise] = useState({
    userid: '',
    username: '',
    activity: 'push ups',
    rep: 0,
    date: new Date(),
  })

  useEffect(() => {
    localStorage.getItem('username')
      ? setExercise({
          ...exercise,
          userid: localStorage.getItem('userid'),
          username: localStorage.getItem('username'),
        })
      : setExercise({ ...exercise })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

    axios
      .get(
        `${ENV_URL}/api/exercises/query?date=${formatDate(
          exercise.date
        )}&userid=${exercise.userid}&username=${exercise.username}`
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
        } else {
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

    axios
      .get(
        `${ENV_URL}/api/exercises/query?date=${formatDate(
          exercise.date
        )}&userid=${exercise.userid}&username=${exercise.username}`
      )
      .then((res) => {
        const existingExercise = res.data[0] || 0

        if (existingExercise.rep >= rep) {
          const newRep = existingExercise.rep - rep
          axios
            .post(`${ENV_URL}/api/exercises/update/${existingExercise._id}`, {
              ...existingExercise,
              rep: newRep,
            })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
        } else {
          setExistingRep(existingExercise.rep)
          setRemoveRep(rep)
        }
      })
      .catch((err) => console.log(err))
  }

  console.log(exercise.date)
  console.log(formatDate(exercise.date))

  return (
    <div className='mb-24 pt-16'>
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
        <h3 className='textWod uppercase text-2xl my-6'>Push ups</h3>
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
              style={{ fontFamily: 'Antonio', zIndex: 0 }}
              theme={{
                donutColor: '#323232',
              }}
              onValueChange={setRep}
              ariaLabelledBy={'my-label'}
            />
          </div>
          <div className='flex justify-between'>
            {exercise.username ? (
              <>
                <div className='ml-5 mt-5'>
                  <button className='btn bg-wodGray' onClick={handleRemove}>
                    remove
                  </button>
                </div>
                <div className='mr-5 mt-5'>
                  <button className='btn bg-wodYellow' onClick={handleAdd}>
                    add
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className='ml-5 mt-5'>
                  <button className='btn bg-wodGray'>
                    <Link to='/login'>log in</Link>
                  </button>
                </div>
                <div className='mr-5 mt-5'>
                  <button className='btn bg-wodYellow'>
                    <Link to='/signup'>sign up</Link>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditExercise
