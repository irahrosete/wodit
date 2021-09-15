import dotenv from 'dotenv'

dotenv.config()

const env = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('You are in the ' + process.env.NODE_ENV + ' environment.')
    return `${process.env.ATLAS_URI}/wodit-dev`
  } else if (process.env.NODE_ENV === 'test') {
    console.log('You are in the ' + process.env.NODE_ENV + ' environment.')
    return `${process.env.ATLAS_URI}/wodit-test`
  } else {
    console.error('Please specify which environment you are in.')
  }
}

const MONGODB_URL = env()

export default MONGODB_URL
