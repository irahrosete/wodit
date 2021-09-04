import React from 'react'

const Menu = ({ isOpen }) => {
  return (
    <div>
      {isOpen ? (
        <div className='bg-wodBlack bg-opacity-90 pb-2'>
          <p className='uppercase font-body text-wodWhite py-2 pr-8 tracking-wide ml-4 text-right'>
            Log in
          </p>
          <p className='uppercase font-body text-wodYellow py-2 pr-8 tracking-widest ml-4 text-right'>
            Sign up
          </p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  )
}

export default Menu
