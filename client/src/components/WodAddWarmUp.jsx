import React, { useState } from 'react'

import DatePick from './DatePick'
import WodEntry from './WodEntry'
import WodEntryAdd from './WodEntryAdd'

const data = [
  {
    userid: '',
    username: 'luigi',
    warmup: '',
    workout:
      'workout here lorem ipsum\r\nworkout here lorem ipsum\r\nworkout here lorem ipsum',
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
    // new Date().getFullYear(),
    // new Date().getMonth(),
    // new Date().getDate()
  })

  console.log(wod)

  return (
    <div className='mb-24 pt-16'>
      <DatePick wod={wod} setWod={setWod} />
      <WodEntryAdd title='warm up' />
      <WodEntry title='workout' description={data[0].workout} />
    </div>
  )
}

export default WodAddWarmUp
