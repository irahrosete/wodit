import React, { useState } from 'react'

const SignUp = () => {
  const [user, setUser] = useState({
    username: '',
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
    const { username, email, password } = user
    if (username && email && password) {
      console.log(user)
      setUser({ username: '', email: '', password: '' })
    }
  }

  return (
    <div className='mb-24 pt-16'>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' required onChange={handleChange} />
        <div className='username error'></div>

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

        <button>Sign up</button>
      </form>
    </div>
  )
}
export default SignUp
