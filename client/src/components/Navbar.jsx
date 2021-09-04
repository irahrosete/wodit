import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/wodit-logo.jpg'
import { ReactComponent as User } from '../img/user.svg'

const Navbar = () => {
  return (
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
        <User fill='#ffffff' width='25' />
        <p className='uppercase font-body text-wodWhite p-2 tracking-wide ml-4'>
          Log in
        </p>
        <p className='uppercase font-body text-wodYellow p-2 tracking-widest ml-4'>
          Sign up
        </p>
      </div>
    </nav>
  )
}

export default Navbar
