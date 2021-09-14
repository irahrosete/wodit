import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ isOpen, setIsOpen }) => {
  const user = ''

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='fixed inset-x-0 mt-16 z-10'>
      {/* fixed inset-x-0 */}
      {isOpen && (
        <div className='bg-wodBlack bg-opacity-80 py-2'>
          <Link to='/login' onClick={handleClick}>
            <p className='menu text-wodWhite'>Log in</p>
          </Link>
          <Link to='/signup' onClick={handleClick}>
            <p className='menu text-wodYellow'>Sign up</p>
          </Link>
          {user && (
            <div>
              <Link to='/girls' onClick={handleClick}>
                <p className='menu text-wodWhite'>The Girls</p>
              </Link>
              <Link to='/signout' onClick={handleClick}>
                <p className='menu text-wodYellow'>Sign out</p>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Menu
