import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Dumbbell } from '../img/dumbbell.svg'
import { ReactComponent as Add } from '../img/add.svg'
import { ReactComponent as Bar } from '../img/bar.svg'

const Footer = () => {
  return (
    <footer className='flex justify-evenly bg-wodGray fixed inset-x-0 bottom-0 py-2'>
      <Link to='/wod'>
        <Dumbbell width='60' />
      </Link>
      <Link to='/'>
        <Add width='50' height='50' className='mt-1' />
      </Link>
      <Link to='/exer'>
        <Bar width='40' className='mt-3 mx-2' />
      </Link>
    </footer>
  )
}

export default Footer
