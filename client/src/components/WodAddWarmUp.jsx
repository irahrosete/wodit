import React, { useState, useEffect } from 'react'

import DatePick from './DatePick'
import WodEntry from './WodEntry'
import WodEntryAdd from './WodEntryAdd'

const data = [
  {
    userid: '',
    username: 'luigi',
    warmup: '',
    workout: 'workout here',
    date: '',
  },
]

const WodAddWarmUp = () => {
  const [wod, setWod] = useState({
    userid: '',
    username: 'luigi',
    warmup: '',
    workout:
      'workout here lorem ipsum\r\nworkout here lorem ipsum\r\nworkout here lorem ipsum',
    date: new Date(),
    // .toISOString().substring(0, 10),
    // new Date().getFullYear(),
    // new Date().getMonth(),
    // new Date().getDate()
  })

  console.log(wod)

  useEffect(() => {
    localStorage.getItem('username')
      ? setWod({
          ...wod,
          userid: localStorage.getItem('userid'),
          username: localStorage.getItem('username'),
        })
      : setWod({ ...wod })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='mb-24 pt-16'>
      <DatePick wod={wod} setWod={setWod} />
      <WodEntryAdd title='warm up' wod={wod} setWod={setWod} />
      <WodEntry title='workout' description={data[0].workout} />
    </div>
  )
}

export default WodAddWarmUp
