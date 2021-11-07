import React, { useState, useEffect } from 'react'
import axios from 'axios'

import DatePick from './DatePick'
import WodEntry from './WodEntry'
import WodEntryAdd from './WodEntryAdd'

import ENV_URL from '../config'

const WodAddWarmUp = () => {
  const [wdate, setWdate] = useState(new Date())

  const [wod, setWod] = useState({
    userid: '',
    username: '',
    warmup: '',
    workout: '',
    date: wdate.toISOString().substring(0, 10),
    // new Date().getFullYear(),
    // new Date().getMonth(),
    // new Date().getDate()
  })

  const user = {
    userid: localStorage.getItem('userid') || '',
    username: localStorage.getItem('username') || '',
  }

  useEffect(() => {
    axios
      .get(
        `${ENV_URL}/api/wods/query?date=${wdate
          .toISOString()
          .substring(0, 10)}&userid=${user.userid}&username=${user.username}`
      )
      .then((res) => {
        setWod(res.data[0])
      })
      .catch((err) => console.log(err))
  }, [wdate, user.userid, user.username])

  return (
    <div className='mb-24 pt-16'>
      <DatePick wod={wod} setWod={setWod} wdate={wdate} setWdate={setWdate} />
      <WodEntryAdd title='warm up' wod={wod} setWod={setWod} />
      <WodEntry title='workout' description={wod ? wod.workout : ''} />
    </div>
  )
}

export default WodAddWarmUp
