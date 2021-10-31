import React from 'react'

import plus from '../img/plus.svg'
import edit from '../img/edit.svg'
import trash from '../img/trash.svg'

const WodEntry = ({ title, description }) => {
  return (
    <>
      <div className='flex justify-center mt-6'>
        <h3 className='textWod uppercase text-2xl mb-3'>{title}</h3>
      </div>
      <div className='boxWod bg-wodGray'>
        <div className='flex justify-end mx-1'>
          {!description && (
            <img src={plus} alt='plus' width='15' className='mx-1' />
          )}
          {description && (
            <>
              <img src={edit} alt='plus' width='18' className='mx-1' />
              <img src={trash} alt='plus' width='15' className='mx-1' />
            </>
          )}
        </div>
        <p className='px-5 py-2 textWod'>{description}</p>
      </div>
    </>
  )
}

export default WodEntry
