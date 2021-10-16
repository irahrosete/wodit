import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { FiPlus, FiMinus } from 'react-icons/fi'

import ENV_URL from '../config'

const Girls = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [girls, setGirls] = useState([])

  const toggle = (id) => {
    isOpen === id ? setIsOpen(null) : setIsOpen(id)
  }

  useEffect(() => {
    axios
      .get(`${ENV_URL}/api/girls/`)
      .then((res) => {
        setGirls(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className='flex items-center justify-center flex-col pt-24 mb-24'>
      <div className='flex flex-col items-center'>
        <h2 className='textWod text-2xl my-3 uppercase '>The Girls</h2>
      </div>
      {girls.map((item) => {
        return (
          <div
            className='flex items-center justify-center flex-col'
            onClick={() => {
              toggle(item._id)
            }}
            key={item._id}
          >
            {isOpen === item._id ? (
              <div className='flex justify-between items-center boxWod bg-wodYellow my-1'>
                <h2 className='textWod text-lg px-4'>{item.name}</h2>
                <span className='px-3'>
                  <FiMinus />
                </span>
              </div>
            ) : (
              <div className='flex justify-between items-center boxWod bg-wodGray my-1'>
                <h2 className='textWod text-lg px-4'>{item.name}</h2>
                <span className='px-3'>
                  <FiPlus />
                </span>
              </div>
            )}
            {isOpen === item._id ? (
              <div className='boxWod textWod'>
                <h3 className='uppercase text-sm pb-3 px-8'>{item.sub}</h3>
                <p className='px-14'>{item.desc1}</p>
                <p className='px-14'>{item.desc2}</p>
                <p className='px-14'>{item.desc3}</p>
                <p className='px-14'>{item.desc4}</p>
                <p className='px-14'>{item.desc5}</p>
                {item.target ? (
                  <p className='uppercase text-sm pt-3 px-8 text-right'>
                    target: {item.target}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default Girls
