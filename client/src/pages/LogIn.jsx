import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import ENV_URL from '../config'

const LogIn = () => {
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState({
    email: '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserInput({ ...userInput, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError({
      email: '',
    })
    axios
      .post(`${ENV_URL}/api/users/login`, userInput, {
        withCredentials: true,
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        const data = response.data

        if (data) {
          localStorage.setItem('username', data.username)
          localStorage.setItem('token', data.jwt)
          localStorage.setItem('userid', data.id)
          window.location.assign('/')
        }
      })
      .catch((err) => {
        // console.log(err.response.data.errors)
        const data = err.response.data
        if (data.errors) {
          setError({
            ...error,
            email: data.errors.email,
          })
        }
      })
  }

  return (
    <div className='flex items-center justify-center flex-col pt-24'>
      <div className='flex flex-col items-center'>
        <h2 className='textWod text-2xl mt-3 uppercase'>Welcome back</h2>
        <p className='p-1 textWodLight'>Log in to continue</p>
      </div>
      <div className='boxLog mt-8'>
        <form className='mx-8 my-5' onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <div className='flex justify-between items-baseline'>
              <label className='textWod' htmlFor='email'>
                Email
              </label>
              <Link to='/signup'>
                <p className='textWodBlue text-xs'>Don't have an account?</p>
              </Link>
            </div>
            <input
              className='rounded border-wodDarkGray textWod w-full'
              type='text'
              name='email'
              required
              onChange={handleChange}
            />
          </div>
          <div className='textWodAlert text-xs tracking-wide'>
            {error.email}
          </div>
          <div className='flex flex-col pt-2'>
            <div className='flex justify-between items-baseline'>
              <label className='textWod' htmlFor='password'>
                Password
              </label>
              <p className='textWodBlue text-xs'>Forgot password?</p>
            </div>
            <input
              className='rounded border-wodDarkGray textWod w-full'
              type='password'
              name='password'
              required
              onChange={handleChange}
            />
          </div>
          <div className='flex justify-center mt-5'>
            <button className='btn bg-wodYellow'>Log in</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default LogIn
