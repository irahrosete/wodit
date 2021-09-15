import React from 'react'

import DatePick from './DatePick'
import WodEntry from './WodEntry'

// import edit from '../img/edit.svg'
// import trash from '../img/trash.svg'

const Wods = () => {
  return (
    <div className='mb-24 pt-16'>
      <DatePick />
      <WodEntry title='warm up' />
      <WodEntry title='workout' description='workout here' />

      {/* <div className='flex justify-center mt-6'>
        <h3 className='textWod uppercase text-2xl mb-3'>warm up</h3>
      </div>
      <div className='boxWod bg-wodGray'>
        <div className='flex justify-end mx-1'>
          <>
            <img src={edit} alt='plus' width='18' className='my-2 mx-1' />
            <img src={trash} alt='plus' width='15' className='my-2 mx-1' />
          </>
        </div>
        <p className='px-2 textWod uppercase font-bold text-sm'>2 rounds</p>

        <p className='px-2 textWod'>5 squat + lunge + lunge</p>
        <p className='px-2 textWod'>5 hollow rocks</p>
        <p className='px-2 textWod'>5 superman extensions</p>
        <p className='px-2 textWod'>
          10 band pull aparts or bent over plate raises
        </p>
        <p className='px-2 pt-4 textWod uppercase font-bold text-sm'>
          2 rounds with DB or KB
        </p>
        <p className='px-2 textWod'>3 push press</p>
        <p className='px-2 textWod'>3 OHS each side</p>
        <p className='px-2 textWod'>3 position power snatch each side</p>
      </div>

      <div className='flex justify-center mt-6'>
        <h3 className='textWod uppercase text-2xl mb-3 '>workout</h3>
      </div>
      <div className='boxWod bg-wodYellow'>
        <div className='flex justify-end mx-1'>
          <>
            <img src={edit} alt='plus' width='18' className='my-2 mx-1' />
            <img src={trash} alt='plus' width='15' className='my-2 mx-1' />
          </>
        </div>
        <p className='px-2 textWod uppercase font-bold text-sm'>for time</p>
        <p className='px-2 textWod'>20-16-12-8-4-2</p>

        <p className='px-2 textWod'>alt DB snatch</p>
        <p className='px-2 textWod'>10-8-6-4-2-1</p>
        <p className='px-2 textWod'>high box jumps (30"/24") or broad jumps</p>
        <p className='px-2 textWod'>
          (10 min cap but aim for less than 7 mins)
        </p>
        <p className='px-2 py-4 textWod'>rest 3 mins</p>

        <p className='px-2 textWod uppercase font-bold text-sm'>amrap 10</p>
        <p className='px-2 textWod'>
          15 lateral hops over DB or 30 m shuttle sprints
        </p>

        <p className='px-2 textWod'>
          5/5 single DB/KB OHS squats (or lunges if needed)
        </p>
        <p className='px-2 textWod'>15 v-ups or T2B</p>
        <p className='px-2 textWod'>
          (shuttle sprints can be any length that space allows, repeat until 30
          m total)
        </p>
      </div> */}
    </div>
  )
}

export default Wods
