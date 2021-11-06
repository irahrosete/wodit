import mongoose from 'mongoose'

const wodSchema = new mongoose.Schema(
  {
    // user: { type: mongoose.Schema.Types.ObjectID, ref: 'User', required: true },
    userid: { type: String, required: true },
    username: { type: String, required: true },
    warmup: { type: String },
    workout: { type: String },
    date: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const Wod = mongoose.model('Wod', wodSchema)

export default Wod
