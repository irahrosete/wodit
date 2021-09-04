import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ isOpen }) => {
  return (
    <div>
      {isOpen && (
        <div className='bg-wodBlack bg-opacity-80 py-2'>
          <Link to='/login'>
            <p className='menu text-wodWhite'>Log in</p>
          </Link>
          <Link to='/signup'>
            <p className='menu text-wodYellow'>Sign up</p>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Menu
