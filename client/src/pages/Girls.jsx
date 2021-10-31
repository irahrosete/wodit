import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { FiPlus, FiMinus } from 'react-icons/fi'
import { FaInfoCircle } from 'react-icons/fa'

import ENV_URL from '../config'

const Girls = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [girls, setGirls] = useState([])

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
          .get(`${ENV_URL}/api/girls/`)
          .then((res) => {
            setGirls(res.data)
          })
          .catch((err) => console.log(err))
      : window.location.assign('/login')
  }, [user.userid, user.username])

  return (
    <div className='flex items-center justify-center flex-col pt-24 mb-24'>
      <div className='flex'>
        <h2 className='textWod text-2xl mb-6'>CrossFit GIRL WoDs</h2>
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
        <div className='border border-wodDarkGray rounded mx-3 mb-4'>
          <h3 className=' textWod tracking-wide text-sm pt-4 px-4'>
            The GIRL WoDs are benchmark workouts in CrossFit. They are designed
            to take a snapshot of your current fitness level. Each Girl WoD
            (workout of the day) is designed to test your fitness in different
            ways: cardio, power, speed, strength, flexibilty.
          </h3>
          <h3 className=' textWod tracking-wide text-sm py-4 px-4'>
            A woman’s identity in CrossFit is rooted in the physically demanding
            and the ferocious power of female athletes, just as if a storm came
            at your way full force and overpowered everything in its way.
            Anything that leaves you flat on your back, looking up at the sky
            asking, ‘What just happened to me?’ deserves a female’s name.
          </h3>
        </div>
      )}
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
