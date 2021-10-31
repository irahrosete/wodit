import React from 'react'
import { Link } from 'react-router-dom'

import plus from '../img/plus.svg'
import edit from '../img/edit.svg'
import trash from '../img/trash.svg'

const WodEntry = ({ title, description }) => {
  const handleDelete = () => {}

  return (
    <>
      <div className='flex justify-center mt-6'>
        <h3 className='textWod uppercase text-2xl mb-3'>{title}</h3>
      </div>
      <div className='boxWod bg-wodGray'>
        <div className='flex justify-end mx-1'>
          {!description && (
            <Link to={title === 'warm up' ? '/addwarmup' : '/addworkout'}>
              <img src={plus} alt='plus' width='15' className='mx-1' />
            </Link>
          )}
          {description && (
            <>
              <Link to={title === 'warm up' ? '/editwarmup' : '/editworkout'}>
                <img src={edit} alt='edit' width='18' className='mx-1' />
              </Link>
              <img
                src={trash}
                alt='trash'
                width='15'
                className='mx-1 cursor-pointer'
                onClick={handleDelete}
              />
            </>
          )}
        </div>
        <p className='px-5 py-2 textWod'>{description}</p>
      </div>
    </>
  )
}

export default WodEntry
