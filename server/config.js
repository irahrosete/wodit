import dotenv from 'dotenv'

dotenv.config()

const env = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('You are in the ' + process.env.NODE_ENV + ' environment.')
    return `${process.env.ATLAS_URI}/wodit-dev?retryWrites=true&w=majority`
  } else if (process.env.NODE_ENV === 'test') {
    console.log('You are in the ' + process.env.NODE_ENV + ' environment.')
    return `${process.env.ATLAS_URI}/wodit-test?retryWrites=true&w=majority`
  } else {
    console.error('Please specify which environment you are in.')
  }
}

const MONGODB_URL = env()

export default MONGODB_URL
