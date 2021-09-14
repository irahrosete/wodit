import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import Menu from './Menu'
import logo from '../img/wodit-logo.jpg'
import { ReactComponent as User } from '../img/user.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuRef = useRef(null)

  // custtom hook to close dropdown menu
  const useOutsideClicker = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  useOutsideClicker(menuRef)

  return (
    <div ref={menuRef} className='relative z-10'>
      <nav className='bg-wodBlack py-3 flex justify-between fixed inset-x-0'>
        <div className='flex ml-8'>
          <Link to='/'>
            <img src={logo} alt='logo' width='50' />
          </Link>
          <Link to='/'>
            <h3 className='font-logo text-4xl text-wodWhite ml-2 tracking-wide'>
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
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default Navbar
