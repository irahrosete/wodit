const env = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://wodit-app.herokuapp.com'
  } else if (process.env.NODE_ENV === 'development') {
    console.log('You are in the ' + process.env.NODE_ENV + ' environment.')
    return 'http://localhost:4000'
  } else if (process.env.NODE_ENV === 'test') {
    console.log('You are in the ' + process.env.NODE_ENV + ' environment.')
    return ''
  } else {
    console.error('Please specify which environment you are in.')
  }
}

const ENV_URL = env()

export default ENV_URL
