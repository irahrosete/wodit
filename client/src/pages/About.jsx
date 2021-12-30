import React from 'react'

const About = () => {
  return (
    <>
      <div className='textWod flex items-center justify-center flex-col pt-24 mb-24'>
        <h2 className=' uppercase text-2xl mb-6'>About</h2>
        <div className='flex flex-col px-6'>
          <p className='uppercase text-center text-xl mt-2 mb-4'>
            Log your reps and keep that habit!
          </p>
          <p>
            WODit is inspired by{' '}
            <a href='https://www.thepushupchallenge.com.au/'>
              The Push Up Challenge
            </a>
            . You can:
          </p>
          <ul>
            <li>- log and track your daily push ups</li>
            <li>- plan for your daily workouts</li>
            <li>- challenge yourself with suggested CrossFit workouts</li>
          </ul>
          <p className='my-2'>
            More than anything, this app is a habit builder and tracker. If you
            can visualise it and keep a record of it, it is more likely that you
            stick to it!
          </p>
          <p className='mt-8 text-sm'>
            Hi!👋🏼 My name is Irah. In June 2021, I participated in The Push Up
            Challenge with the rest of Australia and did 3,318 push ups in 25
            days. The habit stuck with me, and I am still doing daily push ups
            to this day.
          </p>
          <p className='my-1 px-4 text-right text-sm'>
            <a href='https://twitter.com/IrahRosete'>Twitter</a>
          </p>
          <p className='px-4 text-right text-sm'>
            <a href='https://github.com/irahrosete/wodit'>Github</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default About
