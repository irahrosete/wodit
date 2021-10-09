import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import ENV_URL from '../config'

const SignUp = () => {
  const [userInput, setUserInput] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [error, setError] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserInput({ ...userInput, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError({
      username: '',
      email: '',
      password: '',
    })
    axios
      .post(`${ENV_URL}/api/users/signup`, userInput, {
        withCredentials: true,
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        const data = response.data

        if (data.username) {
          localStorage.setItem('username', data.username)
          localStorage.setItem('token', data.jwt)
          localStorage.setItem('userid', data.id)
          window.location.assign('/')
        }
      })
      .catch((err) => {
        console.log(err.response.data.errors)
        const data = err.response.data
        if (data.errors) {
          setError({
            ...error,
            username: data.errors.username,
            email: data.errors.email,
            password: data.errors.password,
          })
        }
      })
  }

  return (
    <div className='flex items-center justify-center flex-col pt-24'>
      <div className='flex flex-col items-center'>
        <h2 className='textWod text-2xl mt-3 uppercase'>Let's get started</h2>
        <p className='p-1 textWodLight'>
          Create an account to start using the app
        </p>
      </div>
      <div className='boxLog mt-8'>
        <form className='mx-8 my-5' onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <div className='flex justify-between items-baseline'>
              <label className='textWod' htmlFor='username'>
                Username
              </label>
              <Link to='/login'>
                <p className='textWodBlue text-xs'>Already have an account?</p>
              </Link>
            </div>
            <input
              className='rounded border-wodDarkGray textWod w-full'
              type='text'
              name='username'
              required
              onChange={handleChange}
            />
          </div>
          <div className='textWodAlert text-xs'>{error.username}</div>
          <div className='flex flex-col pt-2'>
            <label className='textWod' htmlFor='email'>
              Email
            </label>
            <input
              className='rounded border-wodDarkGray textWod w-full'
              type='text'
              name='email'
              required
              onChange={handleChange}
            />
          </div>
          <div className='textWodAlert text-xs'>{error.email}</div>
          <div className='flex flex-col pt-2'>
            <label className='textWod' htmlFor='password'>
              Password
            </label>
            <input
              className='rounded border-wodDarkGray textWod w-full'
              type='password'
              name='password'
              required
              onChange={handleChange}
            />
          </div>
          <div className='textWodAlert text-xs'>{error.password}</div>
          <div className='flex justify-center mt-5'>
            <button className='btn bg-wodYellow'>Sign up</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default SignUp
