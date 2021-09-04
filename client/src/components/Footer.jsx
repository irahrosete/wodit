import React from 'react'
import { ReactComponent as Dumbbell } from '../img/dumbbell.svg'
import { ReactComponent as Add } from '../img/add.svg'
import { ReactComponent as Bar } from '../img/bar.svg'

const Footer = () => {
  return (
    <footer className='flex justify-evenly bg-wodGray fixed inset-x-0 bottom-0 py-3'>
      <Dumbbell width='60' />
      <Add width='40' />
      <Bar width='40' />
    </footer>
  )
}

export default Footer
