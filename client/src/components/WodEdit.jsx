import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ENV_URL from '../config'

const WodEdit = ({ title, wod, setWod, wodValue }) => {
  const [wodEntry, setWodEntry] = useState('')

  const handleChange = (e) => {
    setWodEntry(e.target.value)
  }

  const handleAdd = (e) => {
    // e.preventDefault()
    // console.log('wodedit', wod ? wod : '')

    // axios
    //   .get(
    //     `${ENV_URL}/api/wods/query?date=${wod.date
    //       .toISOString()
    //       .substring(0, 10)}&userid=${wod.userid}&username=${wod.username}`
    //   )
    //   .then((res) => {
    //     const existingWod = res.data[0]
    //     console.log('existingWod', existingWod)

    //     if (existingWod) {
    //       // const newRep = rep + existingExercise.rep
    //       axios
    //         .post(`${ENV_URL}/api/wods/update/${existingWod._id}`, {
    //           ...existingWod,
    //           warmup: wodEntry,
    //         })
    //         .then((res) => console.log(res.data))
    //         .catch((err) => console.log(err))
    //       // window.location.assign('/wod')
    //     } else {
    //       axios
    //         .post(`${ENV_URL}/api/wods/add`, { ...wod, warmup: wodEntry })
    //         .then((res) => console.log(res.data))
    //         .catch((err) => console.log(err))
    //       // window.location.assign('/wod')
    //     }
    //   })
    //   .catch((err) => console.log(err))

    // =====
    // e.preventDefault()
    // console.log('wodedit', wod)

    // if (wod) {
    //   const existingWod = wod
    //   axios
    //     .post(`${ENV_URL}/api/wods/update/${existingWod._id}`, {
    //       ...existingWod,
    //       warmup: wodEntry,
    //     })
    //     .then((res) => console.log(res.data))
    //     .catch((err) => console.log(err))
    //   window.location.assign('/wod')
    // } else {
    //   axios
    //     .post(`${ENV_URL}/api/wods/add`, { ...wod, warmup: wodEntry })
    //     .then((res) => console.log(res.data))
    //     .catch((err) => console.log(err))
    //   window.location.assign('/wod')
    // }
    // =====
    e.preventDefault()
    console.log('wodedit', wod)
    axios
      .post(`${ENV_URL}/api/wods/add`, { ...wod, warmup: wodEntry })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
    // window.location.assign('/wod')
  }

  return (
    <>
      <div className='flex justify-center mt-6'>
        <h3 className='textWod uppercase text-2xl mb-3'>{title}</h3>
      </div>
      <div className='boxWod bg-wodGray'>
        <form className='mx-3'>
          <textarea
            className='textWod w-full resize-y rounded border border-wodDarkGray active-box'
            required
            onChange={handleChange}
            defaultValue={wodValue}
          />
          <div className='flex justify-evenly'>
            <Link to='/wod'>
              <button className='btn bg-wodGray my-2'>cancel</button>
            </Link>
            <button className='btn bg-wodYellow my-2' onClick={handleAdd}>
              save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default WodEdit
