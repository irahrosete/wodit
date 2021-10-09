import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ isOpen, setIsOpen, username, setUsername }) => {
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleLogOut = () => {
    setIsOpen(!isOpen)
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    localStorage.removeItem('userid')
    setUsername('')
    window.location.assign('/')
  }

  return (
    <div className='fixed inset-x-0 mt-16 z-10'>
      {isOpen && (
        <div className='bg-wodBlack bg-opacity-80 py-3'>
          <Link to='/girls' onClick={handleClick}>
            <p className='menu text-wodWhite'>The Girls</p>
          </Link>
          {username && (
            <Link to='/' onClick={handleLogOut}>
              <p className='menu text-wodYellow'>Sign out</p>
            </Link>
          )}
        </div>
      )}
    </div>
  )
}

export default Menu
