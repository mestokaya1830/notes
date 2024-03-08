import Mongoose from 'mongoose'

const usersSC = new Mongoose.Schema({
  name:{type: String, required: true, minlength:3, length:50},
  password:{type: String, required: true, minlength:4, length:100},
  created_at:{type: Date, required: true, default:Date.now()}
})

export default Mongoose.model('users', usersSC)