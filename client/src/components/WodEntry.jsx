import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCheckSquare, FaRegWindowClose } from 'react-icons/fa'

import Alert from './Alert'

import plus from '../img/plus.svg'
import edit from '../img/edit.svg'
import trash from '../img/trash.svg'
import warning from '../img/warning'

const WodEntry = ({ title, description }) => {
  const [addAlert, setAddAlert] = useState(false)

  const handleDelete = () => {}

  const handleAlert = () => {
    addAlert === false ? setAddAlert(true) : setAddAlert(false)
  }

  return (
    <>
      {addAlert && (
        <Alert
          icon={warning}
          message='Are you sure you want to delete?'
          yes={
            <FaCheckSquare
              className='ml-5 text-wodGreen'
              onClick={handleDelete}
            />
          }
          no={<FaRegWindowClose className='ml-2 ' onClick={handleAlert} />}
        />
      )}
      <div className='flex justify-center mt-6'>
        <h3 className='textWod uppercase text-2xl mb-3'>{title}</h3>
      </div>
      <div className='boxWod bg-wodGray'>
        <div className='flex justify-end mx-1'>
          {!description && (
            <Link to={title === 'warm up' ? '/editwarmup' : '/editworkout'}>
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
                onClick={handleAlert}
              />
            </>
          )}
        </div>
        <p className='px-5 py-2 textWod display-linebreak'>{description}</p>
      </div>
    </>
  )
}

export default WodEntry
