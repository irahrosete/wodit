import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 8 },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)

export default User
