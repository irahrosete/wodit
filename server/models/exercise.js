import mongoose from 'mongoose'

const exerciseSchema = new mongoose.Schema(
  {
    firstName: { type: String, require: true },
    activity: { type: String, require: true },
    rep: { type: Number, require: true },
    date: { type: String, require: true },
  },
  {
    timestamps: true,
  }
)

const Exercise = mongoose.model('Exercise', exerciseSchema)

export default Exercise
