import React, { useState } from 'react'
import { data } from '../Data'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { IconContext } from 'react-icons'

const Girls = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = (id) => {
    isOpen === id ? setIsOpen(null) : setIsOpen(id)
  }

  return (
    <div className='flex items-center justify-center flex-col pt-24'>
      <div className='flex flex-col items-center'>
        <h2 className='textWod text-2xl mt-3 uppercase'>The Girls</h2>
      </div>
      {data.map((item, id) => {
        return (
          <div
            className='flex items-center justify-center flex-col'
            onClick={() => {
              toggle(item.id)
            }}
            key={item.id}
          >
            <div className='flex justify-between items-center'>
              <h2>{item.name}</h2>
              <span>{isOpen === item.id ? <FiMinus /> : <FiPlus />}</span>
            </div>
            <h3>{item.sub}</h3>
            <p>{item.desc1}</p>
            <p>{item.desc2}</p>
            <p>{item.desc3}</p>
            <p>{item.desc4}</p>
            <p>{item.desc5}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Girls
