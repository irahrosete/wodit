import mongoose from 'mongoose'

const girlSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    sub: { type: String },
    desc1: { type: String },
    desc2: { type: String },
    desc3: { type: String },
    desc4: { type: String },
    desc5: { type: String },
    desc6: { type: String },
    target: { type: String },
  },
  {
    timestamps: true,
  }
)

const Girl = mongoose.model('Girl', girlSchema)

export default Girl
