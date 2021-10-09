export const handleErrors = (err) => {
  let errors = { username: '', email: '', password: '' }
  // console.log(err.message, err.code)

  // handle duplicate email
  if (err.code === 11000) {
    errors.email = 'Email is already registered'
  }

  // handle model validation
  if (err.message.includes('User validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message
    })
  }

  // incorrect email and password combination
  if (err.message === 'Incorrect email and password combination') {
    errors.email = 'Incorrect email and password combination'
  }
  return errors
}
