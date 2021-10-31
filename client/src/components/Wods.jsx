import React, { useState } from 'react'

import DatePick from './DatePick'
import WodEntry from './WodEntry'

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

const Wods = () => {
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
      <WodEntry title='warm up' description={data[0].warmup} />
      <WodEntry title='workout' description={data[0].workout} />
    </div>
  )
}

export default Wods
