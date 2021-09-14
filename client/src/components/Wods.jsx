import React from 'react'

import DatePick from './DatePick'
import WodEntry from './WodEntry'

const Wods = () => {
  return (
    <div className='mb-28'>
      <DatePick />
      <WodEntry title='warm up' />
      <WodEntry title='workout' description='workout here' />
    </div>
  )
}

export default Wods
