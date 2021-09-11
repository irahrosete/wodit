import React from 'react'

const Alert = ({ icon, message }) => {
  return (
    <div className='flex p-1 my-3 mx-5 justify-center bg-wodAlert border rounded border-wodDarkGray absolute inset-x-0 z-10'>
      {icon}
      <p className='font-body tracking-wider text-wodBlack text-sm flex items-center pl-2'>
        {message}
      </p>
    </div>
  )
}

export default Alert
