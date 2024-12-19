const mongoose = require('mongoose')
const Schema = mongoose.Schema

const loginlogSC = new Schema({
  user:{type: String, required: true},
  admin:{type: String, required: true},
  superadmin:{type: String, required: true},
  date:{type: Date, required: true, default: Date.now()},
  proccess:{type: String, required: true},
  ip:{type: String, required: true}
})

module.exports = mongoose.model('loginlogs', loginlogSC)