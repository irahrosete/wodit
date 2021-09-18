import React, { useState } from 'react'
// import axios from 'axios'

import ENV_URL from '../config'

const SignUp = () => {
  const [user, setUser] = useState({
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
    setUser({ ...user, [name]: value })
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const { username, email, password } = user
  //   if (username && email && password) {
  //     axios
  //       .post(`${ENV_URL}/api/users/signup`, user, {
  //         // withCredentials: true,
  //         credentials: 'include',
  //         headers: { 'Content-Type': 'application/json' },
  //       })
  //       .then((response) => {
  //         console.log(response)
  //       })
  //       .catch((err) => console.log(err))
  //   }
  //   setUser({ username: '', email: '', password: '' })
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError({
      username: '',
      email: '',
      password: '',
    })
    const { username, email, password } = user
    try {
      const res = await fetch(`${ENV_URL}/api/users/signup`, {
        method: 'POST',
        // mode: 'cors',
        body: JSON.stringify({ username, email, password }),
        withCredentials: true,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          // Accept: 'application/json',
        },
      })
      const data = await res.json()
      console.log(data)

      if (data.errors) {
        setError({
          ...error,
          username: data.errors.username,
          email: data.errors.email,
          password: data.errors.password,
        })
      }
      if (data.user) {
        window.location.assign('/')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='mb-24 pt-16'>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' required onChange={handleChange} />
        <div>{error.username}</div>

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
        <div>{error.password}</div>

        <button>Sign up</button>
      </form>
    </div>
  )
}
export default SignUp
