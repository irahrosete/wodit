import React, { useState, useEffect } from 'react'
import { data } from '../Data'
import { FiPlus, FiMinus } from 'react-icons/fi'

const Girls = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = (id) => {
    isOpen === id ? setIsOpen(null) : setIsOpen(id)
  }

  // useEffect(() => {
  //      axios
  //         .get(
  //           `${ENV_URL}/api/exercises/get?userid=${user.userid}&username=${user.username}`
  //         )
  //         .then((res) => {
  //           setExercises(res.data)
  //         })
  //         .catch((err) => console.log(err))
  // }, [])

  return (
    <div className='flex items-center justify-center flex-col pt-24'>
      <div className='flex flex-col items-center'>
        <h2 className='textWod text-2xl my-3 uppercase '>The Girls</h2>
      </div>
      {data.map((item) => {
        return (
          <div
            className='flex items-center justify-center flex-col'
            onClick={() => {
              toggle(item.id)
            }}
            key={item.id}
          >
            {isOpen === item.id ? (
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
            {isOpen === item.id ? (
              <div className='boxWod textWod px-8'>
                <h3 className='uppercase text-sm pb-3'>{item.sub}</h3>
                <p>{item.desc1}</p>
                <p>{item.desc2}</p>
                <p>{item.desc3}</p>
                <p>{item.desc4}</p>
                <p>{item.desc5}</p>
                {item.target ? (
                  <p className='uppercase text-sm pt-3 text-right'>
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
