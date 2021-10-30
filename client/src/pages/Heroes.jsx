import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { FiPlus, FiMinus } from 'react-icons/fi'

import ENV_URL from '../config'

const Heroes = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [heroes, setHeroes] = useState([])
  const user = {
    userid: localStorage.getItem('userid') || '',
    username: localStorage.getItem('username') || '',
  }

  const toggle = (id) => {
    isOpen === id ? setIsOpen(null) : setIsOpen(id)
  }

  useEffect(() => {
    user.username
      ? axios
          .get(`${ENV_URL}/api/heroes/`)
          .then((res) => {
            setHeroes(res.data)
          })
          .catch((err) => console.log(err))
      : window.location.assign('/login')
  }, [user.userid, user.username])

  return (
    <div className='flex items-center justify-center flex-col pt-24 mb-24'>
      <div className='flex flex-col items-center'>
        <h2 className='textWod text-2xl mb-6'>CrossFit HERO WODs</h2>
      </div>
      {heroes.map((item) => {
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
                <p className='px-14'>{item.desc6}</p>
                <p className='px-14'>{item.desc7}</p>
                <p className='px-14'>{item.desc8}</p>
                <p className='px-14'>{item.desc9}</p>
                <p className='px-14'>{item.desc10}</p>
                <p className='px-14'>{item.desc11}</p>
                <p className='px-14'>{item.desc12}</p>
                <p className='px-14'>{item.desc13}</p>
                <p className='px-14'>{item.desc14}</p>
                <p className='px-14'>{item.desc15}</p>
                <p className='px-14'>{item.desc16}</p>
                <p className='px-14'>{item.desc17}</p>
                <p className='px-14'>{item.desc18}</p>
                <p className='px-14'>{item.desc19}</p>
                <p className='px-14'>{item.desc20}</p>
                {item.note ? (
                  <p className='uppercase text-sm pt-3 px-8 text-right'>
                    in memory of {item.note}
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

export default Heroes
