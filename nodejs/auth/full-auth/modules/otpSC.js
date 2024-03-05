import Mongoose from 'mongoose'

const otpSC = new Mongoose.schema({
  email: {type: String, required: true, unique: true},
  opt: {type: String},
  createdAt: {type: Date, default: Date.now(), expires: 60 * 15},
})

export default  Mongoose.model('otp', otpSC)