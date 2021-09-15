export const handleErrors = (err) => {
  let errors = { username: '', email: '', password: '' }
  console.log(err.message, err.code)

  // handle duplicate email
  if (err.code === 11000) {
    errors.email = 'Email is already registered'
    return errors
  }

  // handle model validation
  if (err.message.includes('User validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message
    })
  }
  return errors
}
