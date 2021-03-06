import React, { useState, useEffect } from 'react'
import axios from 'axios'

import DatePick from './DatePick'
import WodEntry from './WodEntry'
import WodEdit from './WodEdit'

import ENV_URL from '../config'
import { formatDate } from '../utils/format-date'

const WodEditWarmUp = () => {
  const [wdate, setWdate] = useState(new Date())

  const [wod, setWod] = useState({
    userid: '',
    username: '',
    warmup: '',
    workout: '',
    date: wdate,
  })

  const user = {
    userid: localStorage.getItem('userid') || '',
    username: localStorage.getItem('username') || '',
  }

  useEffect(() => {
    axios
      .get(
        `${ENV_URL}/api/wods/query?date=${formatDate(wdate)}&userid=${
          user.userid
        }&username=${user.username}`
      )
      .then((res) => {
        res.data[0]
          ? setWod(res.data[0])
          : setWod({
              userid: user.userid,
              username: user.username,
              warmup: '',
              workout: '',
              date: wdate,
            })
      })
      .catch((err) => console.log(err))
  }, [wdate, user.userid, user.username])

  return (
    <div className='mb-24 pt-16'>
      <DatePick wod={wod} wdate={wdate} setWdate={setWdate} />
      <WodEdit
        title='warm up'
        wod={wod}
        setWod={setWod}
        wodValue={wod ? wod.warmup : ''}
        wodSection='warmup'
      />
      <WodEntry title='workout' description={wod ? wod.workout : ''} />
    </div>
  )
}

export default WodEditWarmUp
