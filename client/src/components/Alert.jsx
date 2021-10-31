import React from 'react'

const Alert = ({ icon, message, yes, no }) => {
  return (
    <div className='flex justify-center'>
      <div className='boxAlert'>
        {icon}
        <p className='textWod text-sm flex items-center pl-2'>{message}</p>
        <div>
          <button>{yes}</button>
          <button>{no}</button>
        </div>
      </div>
    </div>
  )
}

export default Alert
