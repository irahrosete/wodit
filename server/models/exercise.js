import mongoose from 'mongoose'

const exerciseSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    activity: { type: String, required: true },
    rep: { type: Number, required: true },
    date: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const Exercise = mongoose.model('Exercise', exerciseSchema)

export default Exercise
