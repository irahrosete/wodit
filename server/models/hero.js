import mongoose from 'mongoose'

const heroSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    sub: { type: String },
    desc1: { type: String },
    desc2: { type: String },
    desc3: { type: String },
    desc4: { type: String },
    desc5: { type: String },
    desc6: { type: String },
    desc7: { type: String },
    desc8: { type: String },
    desc9: { type: String },
    desc10: { type: String },
    desc11: { type: String },
    desc12: { type: String },
    desc13: { type: String },
    desc14: { type: String },
    desc15: { type: String },
    desc16: { type: String },
    desc17: { type: String },
    desc18: { type: String },
    desc19: { type: String },
    desc20: { type: String },
    hero: { type: String },
  },
  {
    timestamps: true,
  }
)

const Hero = mongoose.model('Hero', heroSchema)

export default Hero
