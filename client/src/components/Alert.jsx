import React from 'react'

const Alert = ({ icon, message }) => {
  return (
    <div className='flex justify-center'>
      <div className='boxAlert'>
        {icon}
        <p className='textWod text-sm flex items-center pl-2'>{message}</p>
      </div>
    </div>
  )
}

export default Alert
