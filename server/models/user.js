import mongoose from 'mongoose'
import pkg from 'validator'
const { isEmail } = pkg

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: [true, 'Please enter a username'] },
    email: {
      type: String,
      required: [true, 'Please enter an email'],
      unique: true,
      lowercase: true,
      validate: [isEmail, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minlength: [8, 'Minimum password length is 8 characters'],
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)

export default User
