import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ENV_URL from '../config'

const Menu = ({ isOpen, setIsOpen, user, setUser }) => {
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleLogOut = (e) => {
    setIsOpen(!isOpen)
    axios
      .get(`${ENV_URL}/api/users/logout/`, {
        withCredentials: true,
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='fixed inset-x-0 mt-16 z-10'>
      {isOpen && (
        <div className='bg-wodBlack bg-opacity-80 py-2'>
          <Link to='/girls' onClick={handleClick}>
            <p className='menu text-wodWhite'>The Girls</p>
          </Link>
          <Link to='/login' onClick={handleClick}>
            <p className='menu text-wodWhite'>Log in</p>
          </Link>
          <Link to='/signup' onClick={handleClick}>
            <p className='menu text-wodYellow'>Sign up</p>
          </Link>
          {/* {user && ( */}
          <Link to='/login' onClick={handleLogOut}>
            <p className='menu text-wodYellow'>Sign out</p>
          </Link>
          {/* )} */}
        </div>
      )}
    </div>
  )
}

export default Menu
