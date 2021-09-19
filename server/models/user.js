import mongoose from 'mongoose'
import pkg from 'validator'
const { isEmail } = pkg
import bcrypt from 'bcrypt'

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

// hash password before doc is saved to db
userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

// fire a function after doc is saved to db
// userSchema.post('save', function (doc, next) {
//   console.log('new user created and saved', doc)
//   next()
// })

// static method to login user
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email })
  if (user) {
    const auth = await bcrypt.compare(password, user.password)
    if (auth) {
      return user
    }
    throw Error('Incorrect email and password combination')
  }
  throw Error('Incorrect email and password combination')
}

const User = mongoose.model('User', userSchema)

export default User
