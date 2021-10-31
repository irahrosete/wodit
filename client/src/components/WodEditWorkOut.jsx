import React, { useState } from 'react'

import DatePick from './DatePick'
import WodEntry from './WodEntry'
import WodEntryEdit from './WodEntryEdit'

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

const WodEditWorkOut = () => {
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
      <WodEntryEdit title='workout' />
    </div>
  )
}

export default WodEditWorkOut
