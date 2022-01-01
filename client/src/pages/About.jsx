import React from 'react'

import { FaGithubAlt, FaTwitter, FaCaretRight } from 'react-icons/fa'

const About = () => {
  return (
    <>
      <div className='textWod flex items-center justify-center flex-col pt-24'>
        <h2 className=' uppercase text-2xl mb-6'>About</h2>
        <div className='flex flex-col'>
          <p className='uppercase tracking-wide text-center mb-4'>
            Log your reps and keep that habit
          </p>

          <div className='boxLog py-2 px-4'>
            <p>
              <span className='font-logo'>WODit</span> is inspired by{' '}
              <a
                href='https://www.thepushupchallenge.com.au/'
                className='underline'
              >
                The Push Up Challenge
              </a>
              .
            </p>
            <ul>
              <li>
                <span className='text-wodBlack text-sm'>
                  <FaCaretRight className='cursor-pointer inline' />
                </span>{' '}
                Track your daily push ups
              </li>
              <li>
                <span className='text-wodBlack text-sm'>
                  <FaCaretRight className='cursor-pointer inline' />
                </span>{' '}
                Plan for your workouts
              </li>
              <li>
                <span className='text-wodBlack text-sm'>
                  <FaCaretRight className='cursor-pointer inline' />
                </span>{' '}
                Challenge yourself with suggested workouts
              </li>
            </ul>
            <p className='my-2'>
              This app is a habit builder and tracker. If you can visualise it
              and keep a record of it, it is more likely you'll stick to it!
            </p>
          </div>

          <div className='boxText px-6'>
            <p className='text-center mt-6 text-sm'>Hi!👋🏼 My name is Irah.</p>
            <p className='mb-4 text-sm'>
              In June 2021, I participated in The Push Up Challenge with the
              rest of Australia, and did 3,318 push ups in 25 days. This habit
              stuck with me, and I am still doing daily push ups to this day.
            </p>
          </div>

          <div className='boxText mt-6 px-6 flex justify-between align-baseline'>
            <p className='text-xs'>© 2021 Irah Rosete</p>
            <p className='text-right'>
              <a href='https://github.com/irahrosete/wodit'>
                <span className='text-wodBlack'>
                  <FaGithubAlt className='cursor-pointer inline mx-1' />
                </span>
              </a>
              <a href='https://twitter.com/IrahRosete'>
                <span className='text-wodBlack'>
                  <FaTwitter className='cursor-pointer inline mx-1' />
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
