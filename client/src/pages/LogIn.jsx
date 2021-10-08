import React, { useState } from 'react'
import axios from 'axios'

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
        console.log(data)

        if (data) {
          localStorage.setItem('username', data.username)
          localStorage.setItem('token', data.jwt)
          window.location.assign('/')
        }
      })
      .catch((err) => {
        console.log(err.response.data.errors)
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
    <div className='mb-24 pt-16'>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' required onChange={handleChange} />
        <div>{error.email}</div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          required
          onChange={handleChange}
        />
        <div></div>
        <button>Log in</button>
      </form>
    </div>
  )
}
export default LogIn
