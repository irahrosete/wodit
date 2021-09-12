import React from 'react'

import Footer from './Footer'
import DatePick from './DatePick'
import WodEntry from './WodEntry'

const Wods = () => {
  return (
    <>
      <DatePick />
      <WodEntry title='warm up' />
      <WodEntry title='workout' description='workout here' />
      <Footer />
    </>
  )
}

export default Wods
