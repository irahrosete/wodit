import mongoose from 'mongoose'

const exerciseSchema = new mongoose.Schema(
  {
    // user: { type: mongoose.Schema.Types.ObjectID, ref: 'User', required: true },
    userid: { type: String, required: true },
    username: { type: String, required: true },
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
