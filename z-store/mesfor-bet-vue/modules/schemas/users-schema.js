import mongoose from 'mongoose'

const usersSC = new mongoose.Schema({
  user:{type: String, required: true, unique: true},
  nick:{type: String, required: true, unique: true},
  pass:{type: String, required: true},
  admin:{type: String, required: true},
  superadmin:{type: String, required: true},
  role:{type: String, required: true},
  credit:{type: Number, default: 0},
  creditremain:{type: Number, default: 0},
  userlimit:{type: Number, default: 0},
  usedlimit:{type: Number, default: 0},
  date:{type: Date, default: Date.now},
  state:{type: String, default: 'aktif'},
  payment:{type: Date},
  fakelogin:{type: Number, default: 0},
  logincount:{type: Number, default: 3},
  logincheck:{type: String, default: 'passive'},
  autopay:{type: Boolean, default: true},
  customercomission:{type: Number, default: 5},
  usercancelbet:{type: Number, default: 15},
  settings:{type: Object},
  mobil:{type: Boolean, default: true}
})

export default mongoose.model('users', usersSC)