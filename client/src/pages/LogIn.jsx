import React, { useState } from 'react'

const LogIn = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = user
    if (email && password) {
      console.log(user)
      setUser({ email: '', password: '' })
    }
  }

  return (
    <div className='mb-24 pt-16'>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor='email'>Email</label>
        <input type='text' name='email' required onChange={handleChange} />
        <div className='email error'></div>

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          required
          onChange={handleChange}
        />
        <div className='password error'></div>

        <button>Log in</button>
      </form>
    </div>
  )
}
export default LogIn
