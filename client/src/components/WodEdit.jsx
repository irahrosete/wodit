import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ENV_URL from '../config'

const WodEdit = ({ title, wod, wodValue, wodSection }) => {
  const [wodEntry, setWodEntry] = useState('')

  const handleChange = (e) => {
    setWodEntry(e.target.value)
  }

  const handleAdd = (e) => {
    e.preventDefault()
    if (wod.warmup === '' && wod.workout === '' && !wod._id) {
      axios
        .post(`${ENV_URL}/api/wods/add`, { ...wod, [wodSection]: wodEntry })
        .then((res) => {
          window.location.assign('/wod')
          console.log(res.data)
        })
        .catch((err) => console.log(err))
    } else {
      axios
        .post(`${ENV_URL}/api/wods/update/${wod._id}`, {
          ...wod,
          [wodSection]: wodEntry,
        })
        .then((res) => {
          window.location.assign('/wod')
          console.log(res.data)
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <>
      <div className='flex justify-center mt-6'>
        <h3 className='textWod uppercase text-2xl mb-3'>{title}</h3>
      </div>
      <div className='boxWod bg-wodGray px-3'>
        <textarea
          className='textWod w-full resize-y rounded border border-wodDarkGray active-box'
          required
          onChange={handleChange}
          defaultValue={wodValue}
          rows='8'
        />
        <div className='flex justify-evenly'>
          <Link to='/wod'>
            <button className='btn bg-wodGray my-2'>cancel</button>
          </Link>
          <button className='btn bg-wodYellow my-2' onClick={handleAdd}>
            save
          </button>
        </div>
      </div>
    </>
  )
}

export default WodEdit
