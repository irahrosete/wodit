import React from 'react'

import plus from '../img/plus.svg'
import edit from '../img/edit.svg'
import trash from '../img/trash.svg'

const WodEntry = ({ title, description }) => {
  return (
    <>
      <div className='flex justify-center mt-6'>
        <h3 className='uppercase font-body tracking-wider text-2xl mb-3'>
          {title}
        </h3>
      </div>
      <div className='wodBox bg-wodGray'>
        <div className='flex justify-end mx-1'>
          {!description && (
            <img src={plus} alt='plus' width='15' className='my-2 mx-1' />
          )}
          {description && (
            <>
              <img src={edit} alt='plus' width='18' className='my-2 mx-1' />
              <img src={trash} alt='plus' width='15' className='my-2 mx-1' />
            </>
          )}
        </div>
        <p className='p-2 font-body tracking-wider'>{description}</p>
      </div>
    </>
  )
}

export default WodEntry
