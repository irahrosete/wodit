import React from 'react'
import { Link } from 'react-router-dom'

const WodEntryAdd = ({ title, description }) => {
  const handleAdd = () => {}
  const handleChange = () => {}
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className='flex justify-center mt-6'>
        <h3 className='textWod uppercase text-2xl mb-3'>{title}</h3>
      </div>
      <div className='boxWod bg-wodGray'>
        <form className='mx-5' onSubmit={handleSubmit}>
          <textarea
            className='textWod w-full resize-y rounded border border-wodDarkGray'
            placeholder='start here...'
            required
            onChange={handleChange}
          />
        </form>
        <p className='px-5 py-2 textWod'>{description}</p>
        <div className='ml-5 flex justify-evenly'>
          <Link to='/wod'>
            <button className='btn bg-wodGray my-2'>cancel</button>
          </Link>
          <button className='btn bg-wodYellow my-2' onClick={handleAdd}>
            add
          </button>
        </div>
      </div>
    </>
  )
}

export default WodEntryAdd
