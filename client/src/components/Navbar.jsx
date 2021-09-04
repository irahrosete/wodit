import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Menu from './Menu'
import logo from '../img/wodit-logo.jpg'
import { ReactComponent as User } from '../img/user.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <nav className='bg-wodBlack py-2 pt-4 pb-2 flex justify-between'>
        <div className='flex ml-8'>
          <Link to='/'>
            <img src={logo} alt='logo' width='50' />
          </Link>
          <Link to='/'>
            <h3 className='font-logo text-3xl text-wodWhite ml-2 tracking-wide'>
              WODit
            </h3>
          </Link>
        </div>
        <div className='flex items-center mr-8'>
          <button onClick={toggleMenu}>
            <User fill='#ffffff' width='25' />
          </button>
        </div>
      </nav>
      <Menu isOpen={isOpen} />
    </div>
  )
}

export default Navbar
