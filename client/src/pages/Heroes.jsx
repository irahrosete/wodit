import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { FiPlus, FiMinus } from 'react-icons/fi'
import { FaInfoCircle } from 'react-icons/fa'

import ENV_URL from '../config'

const Heroes = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [heroes, setHeroes] = useState([])
  const [isInfoOpen, setIsInfoOpen] = useState(false)

  const user = {
    userid: localStorage.getItem('userid') || '',
    username: localStorage.getItem('username') || '',
  }

  const toggle = (id) => {
    isOpen === id ? setIsOpen(null) : setIsOpen(id)
  }

  const toggleInfo = () => {
    isInfoOpen === false ? setIsInfoOpen(true) : setIsInfoOpen(false)
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
      <div className='flex '>
        <h2 className='textWod text-2xl mb-6'>CrossFit HERO WODs</h2>
        <span
          className='pl-2 text-wodBlack'
          onClick={() => {
            toggleInfo()
          }}
        >
          <FaInfoCircle className='cursor-pointer' />
        </span>
      </div>
      {isInfoOpen && (
        <div className='border border-wodDarkGray rounded mx-3 mb-4 max-w-xs'>
          <h3 className=' textWod tracking-wide text-sm pt-4 px-4'>
            The HERO WoDs are some of the most intense and brutal workouts in
            CrossFit. They are more than just workouts. They are designed as a
            way to honour the brave military, navy, fire and police men and
            women who have given their lives in line of duty.
          </h3>
          <h3 className=' textWod tracking-wide text-sm py-4 px-4'>
            Each Hero WoD (workout of the day) test your strength and
            conditioning in ways that few other WoDs do. They often leave you in
            pain, trying to catch your breath as you lay on the gym floor in
            agony.
          </h3>
        </div>
      )}
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
                  <FiMinus className='cursor-pointer' />
                </span>
              </div>
            ) : (
              <div className='flex justify-between items-center boxWod bg-wodGray my-1'>
                <h2 className='textWod text-lg px-4'>{item.name}</h2>
                <span className='px-3'>
                  <FiPlus className='cursor-pointer' />
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
                {item.hero ? (
                  <p className='uppercase text-sm pt-3 px-8 text-right'>
                    in honour of {item.hero}
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
